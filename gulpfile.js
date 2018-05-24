'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const webp = require('gulp-webp')
const prefixer = require('gulp-autoprefixer')
// const changed = require('gulp-changed')
const dest = 'public'
const browserSync = require('browser-sync')

// Comprimiendo los estilos en uno solo, así como tambien los optimiza y minifica
gulp.task('styles', () => {
  return gulp
    .src('dist/styles/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(prefixer({browsers: ['ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10']}))
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'styles'}))
})

// Pasando todos los assets del proyecto a la carpeta publica
gulp.task('assets', () => {
  return gulp
    .src('dist/assets/*')
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'assets'}))
})

// Optimizar imagenes
gulp.task('images', () => {
  return gulp
    .src('dist/images/**/*')
    .pipe(imagemin({progressive: true, interlaced: true}))
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'images'}))
})

// Optimizar iconos
gulp.task('icons', () => {
  return gulp
    .src('dist/icons/**/*')
    .pipe(imagemin({progressive: true, interlaced: true}))
    .pipe(webp())
    .pipe(gulp.dest(dest))
    .pipe(size({title: 'icons'}))
})

// Realiza el bundle del javascript optimizandolo y minificandolo
// gulp.task('build', () => {
//   return browserify('./dist/lib/index.js')
//     .transform(babel, { presets: ['env', 'minify'] })
//     .bundle()
//     .pipe(source('index.js'))
//     .pipe(rename('app.js'))
//     .pipe(gulp.dest(dest))
//     .pipe(size({title: 'build'}))
// })

// // Generando el service-worker de la app
// gulp.task('service-worker', () => {
//   return workboxBuild.generateSW({
//     'globDirectory': 'public/',
//     'globPatterns': [
//       '**/*.{png,css,js,xml,html,webmanifest,ico,jpg,webp}'
//     ],
//     'swDest': 'public\\utopia.js'
//   }).then(({count, size}) => {
//     console.log(`Service-worker generado , Se precacheará ${count} archivos, un total de ${size / 131072} Mb.`)
//   })
// })

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  })
})

gulp.task('watch', () => {
  gulp.watch('./dist/styles/*', ['styles'], browserSync.reload)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('./dist/styles/*').on('change', browserSync.reload)
})

// gulp.task('default', ['watch', 'serve'])
gulp.task('default', ['styles', 'assets', 'images', 'icons'])
