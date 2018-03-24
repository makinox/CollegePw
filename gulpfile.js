'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const workboxBuild = require('workbox-build')
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const webp = require('gulp-webp')

gulp.task('styles', () => {
  return gulp
    .src('styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
    .pipe(size({title: 'styles'}))
})

gulp.task('assets', () => {
  return gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
    .pipe(size({title: 'assets'}))
})

// Optimizar Imagenes
gulp.task('images', () => {
  return gulp.src('images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(webp())
    .pipe(gulp.dest('public'))
    .pipe(size({title: 'images'}))
})

gulp.task('build', () => {
  return browserify('./lib/index.js')
    .transform(babel, { presets: ['es2015', 'minify'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
    .pipe(size({title: 'build'}))
})

gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    'globDirectory': 'public/',
    'globPatterns': [
      '**/*.{png,css,js,xml,html,webmanifest,ico,jpg,webp}'
    ],
    'swDest': 'public\\utopia.js'
  }).then(({count, size}) => {
    console.log(`Service-worker generado , Se precacheará ${count} archivos, un total de ${size / 131072} Mb.`)
  })
})

gulp.task('default', ['styles', 'assets', 'images', 'build', 'service-worker'])
