var gulp = require('gulp'),
  zip = require('gulp-zip');


gulp.task('export', function () {
  return gulp.src([
      '*app.json',
      '*views/**',
      '*lib/**',
      '*js/**',
      '*img/**',
      '*style/**'
    ])
    .pipe(zip('propsapp-youtube.zip'))
    .pipe(gulp.dest('dist'));
});
