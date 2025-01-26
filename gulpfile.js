const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass")); // Dart Sass
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");

/**
 * Reports errors during task execution and prevents Gulp from crashing.
 * @param {Error} error - The error object thrown during task execution.
 * @this {Stream} - The current Gulp stream, to allow proper chaining.
 */
function reportError(error) {
  notify.onError({
    title: `Task Failed: [${error.plugin}]`,
    message: "Check your console.",
    sound: false,
  })(error);
  console.error(error.toString());
  this.emit("end");
}

/**
 * Compiles SCSS files into minified CSS with sourcemaps.
 * @returns {Stream} - Gulp stream processing SCSS files.
 */
function css() {
  return gulp
    .src("src/scss/**/*.scss", { sourcemaps: true })
    .pipe(plumber({ errorHandler: reportError }))
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("public/css", { sourcemaps: "." }));
}

/**
 * Transpiles JavaScript (ES6+) to ES5, minifies, and generates sourcemaps.
 * @returns {Stream} - Gulp stream processing JavaScript files.
 */
function es6() {
  return gulp
    .src("src/js/*.js", { sourcemaps: true })
    .pipe(plumber({ errorHandler: reportError }))
    .pipe(
      babel({
        presets: [
          ["@babel/preset-env", { targets: "defaults" }],
          "@babel/preset-react",
        ],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("public/js", { sourcemaps: "." }));
}

/**
 * Copies static assets (images, fonts, etc.) to the `public/assets` directory.
 * @returns {Stream} - Gulp stream for static assets.
 */
function assets() {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("public/assets"));
}

/**
 * Initializes a local development server with live reload.
 * @returns {void}
 */
function serve() {
  browserSync.init({
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 7000,
    reloadDelay: 500,
    server: { baseDir: "./" },
  });

  gulp.watch("src/scss/**/*.scss", css).on("change", browserSync.reload);
  gulp.watch("src/js/*.js", es6).on("change", browserSync.reload);
  gulp.watch("src/assets/**/*", assets).on("change", browserSync.reload);
}

/**
 * Default Gulp task: builds CSS, JS, and assets, then starts the dev server.
 * @returns {void}
 */
exports.default = gulp.series(gulp.parallel(css, es6, assets), serve);
