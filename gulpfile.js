const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const { series } = require('gulp');

function reportError(error) {
  notify({
    title: `Task Failed [${error.plugin}]`,
    message: 'Check the console.'
  }).write(error);
  console.log(error.toString());
  this.emit('end');
}

function css() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber({ errorHandler: reportError }))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
}

function es6() {
  return gulp.src('src/js/*.js')
    .pipe(plumber({ errorHandler: reportError }))
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: [["@babel/preset-env", { "targets": "defaults" }]] }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'));
}

function assets() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('public/assets'));
}

function serve() {
  series(es6, sass)
  browserSync.init({
    files: ['public/**/*.*'],
    browser: 'google chrome',
    port: 7000,
    reloadDelay: 500,
    server: { baseDir: './' }
  });
}

exports.default = series(css, es6, assets, serve, () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['es6']);
  gulp.watch('src/assets/**/*', ['assets']);
})