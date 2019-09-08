"use strict";

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('default', function () {
  return gulp.src([
    'assets/**/*',
    '!assets/css/**',
    '!assets/images/**'
    ])
    .pipe(changed('thumbnails'))
    .pipe(imageResize({
      width: 400,
      height: 400,
      crop: false,
      upscale: false
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('thumbnails'));
});