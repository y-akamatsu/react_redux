const gulp = require("gulp");
const watch = require("gulp-watch");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");

gulp.task("compile", function () {
  return gulp.src([
    "./src/js/index.js",
  ])
    .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
    .pipe(webpackStream(webpackConfig), null, function(err, stats) {
      if (stats.compilation.errors.length > 0) {
        notify({
          title: "webpack error",
          message: stats.compilation.errors[0].error
        });
      }
    })
    .pipe(gulp.dest("js"))
});

gulp.task("sass", function() {
  return gulp.src("./src/sass/**/*.scss")
  .pipe(plumber({ //gulp-pulbmerでerrorで処理を止めないようにする
    errorHandler: notify.onError("Error: <%= error.message %>") //gulp-notifyでエラーの内容を表示させる
  }))
  .pipe(sass())//pipeでコンパイルの処理
  .pipe(gulp.dest("./css"))//gulp.destでcssファイルを表示させる
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
  });

  watch(["./src/sass/**/**.scss"], function () {
    gulp.setMaxListeners(["sass"]);
  });
  watch(["./**/*.html", "./js/**/*.js"], function () {
    browserSync.reload();
  });
})

gulp.task("default", gulp.series(gulp.parallel("compile",　"sass", "browser-sync", "watch")));