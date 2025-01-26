const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass")); // Using Dart Sass
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
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
 * Compiles SCSS files to CSS, applies minification, and writes sourcemaps.
 * @returns {Stream} - The Gulp stream for SCSS files.
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
 * Transpiles ES6+ JavaScript to ES5, minifies it, and writes sourcemaps.
 * @returns {Stream} - The Gulp stream for JavaScript files.
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
    .pipe(terser()) // Using gulp-terser for modern JavaScript minification
    .pipe(gulp.dest("public/js", { sourcemaps: "." }));
}

/**
 * Copies static assets (e.g., images, fonts) to the `public` directory.
 * @returns {Stream} - The Gulp stream for asset files.
 */
function assets() {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("public/assets"));
}

/**
 * Initializes a development server with live reload using BrowserSync.
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
 * The default task that builds CSS, JS, and assets, then starts the server.
 * @returns {void}
 */
exports.default = gulp.series(
  gulp.parallel(css, es6, assets), // Run CSS, JS, and asset tasks in parallel
  serve
);
