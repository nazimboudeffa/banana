var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/Banana.js',
    'src/controls/ControlFactory.js',
    'src/core/Page.js',
    'src/core/Application.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/'));
});
