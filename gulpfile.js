var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/Banana.js',
    'src/core/Application.js',
    'src/core/PageManager.js',
    'src/core/Page.js',
    'src/controls/BananaControlFactory.js',
    'src/controls/Text.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('scripts-devs', function() {
  return gulp.src([
    'devs/Banana.js',
    'devs/core/Application.js',
    'devs/core/PageManager.js',
    'devs/core/Page.js',
    'devs/controls/BananaControlFactory.js',
    'devs/controls/Text.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/'));
});
