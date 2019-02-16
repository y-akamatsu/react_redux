const gulp = require("gulp");
const watch = require("gulp-watch")
const browserSync = require("browser-sync").create();

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("watch", function(){
  watch(["./**/*.html", "./js/**.*js"], function() {
    browserSync.reload();
  })
})

gulp.task("default", gulp.series(gulp.parallel("browser-sync", "watch")));