"use strict";

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var debug = require('gulp-debug');

gulp.task('default', function () {
  return gulp.src([
    'assets/**/*',
    '!assets/css/**',
    '!assets/js/**',
    '!assets/images/**',
    '!assets/webfonts/**'
    ])
    .pipe(changed('thumbnails'))
    .pipe(debug())
    .pipe(imageResize({
      width: 400,
      height: 400,
      crop: false,
      upscale: false
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('thumbnails'));
});