'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const workboxBuild = require('workbox-build')

gulp.task('styles', () => {
  gulp
    .src('styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

gulp.task('assets', () => {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
})

gulp.task('build', () => {
  browserify('./lib/index.js')
    .transform(babel, { presets: ['es2015', 'minify'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
})

gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    'globDirectory': 'public/',
    'globPatterns': [
      '**/*.{png,css,js,xml,html,webmanifest}'
    ],
    'swDest': 'public\\utopia.js'
  }).then(({count, size}) => {
    console.log(`Generated , which will precache ${count} files, totaling ${size / 131072} Mb.`)
  })
})

gulp.task('default', ['styles', 'assets', 'build', 'service-worker'])
