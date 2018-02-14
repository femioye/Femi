"use strict"; 
const less = require('gulp-less');
const path = require('path');
const gulp = require('gulp');
const htmlbeautify = require('gulp-html-beautify');

//paths
const htmlSources = './*.html'; 
const cssSources ='./css/*.less'

gulp.task('htmlbeautify', function(){
    

  gulp.src(htmlSources)
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['htmlbeautify', 'less']);

gulp.task('less', function () {
  return gulp.src(cssSources)
    .pipe(less())
    .pipe(gulp.dest('./css'));
});