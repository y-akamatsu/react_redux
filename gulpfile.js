const gulp = require("gulp");
const watch = require("gulp-watch");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browserSync = require("browser-sync").create();
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

gulp.task("compile", function () {
  return gulp.src([
    ".src/js/app.js",
  ])
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(webpackStream(webpackConfig), null, function (err, stats) {
      if (stats.compilation.errors.length > 0) {
        notify({
          title: "webpack errpr",
          message: stats.compilation.errors[0].error
        });
      }
    })
    .pipe(gulp.dest("js"))
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("watch", function () {
  watch(["./src/js/**/**.js"], function () {
    gulp.setMaxListeners(["compile"]);
  })
  watch(["./**/*.html", "./js/**.*js"], function () {
    browserSync.reload();
  })
})

gulp.task("default", gulp.series(gulp.parallel("compile", "browser-sync", "watch")));