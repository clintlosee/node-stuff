'use strict';

var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', []);

gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js') // Get all of the files in the src/scripts/ directory
    .pipe(concat('app.min.js')) // concatenate them and name the new file app.min.js
    .pipe(uglify()) // minify the files
    .pipe(gulp.dest('public/js')); // save the files to the public/js/ directory
});

gulp.task('watch.scripts', ['scripts'], function () {
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});