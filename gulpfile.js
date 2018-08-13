'use strict';

// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const gutil = require("gulp-util");
const webpack = require("webpack");

//sass-css paths
const sass_src = './src/assets/scss/**/*.scss';
const sass_dest = './src/assets/css';


//gulp tasks
gulp.task('compile_scss', function() {
    gulp.src(sass_src)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min' }))
        .pipe(changed(sass_dest))
        .pipe(gulp.dest(sass_dest));
});

gulp.task('watch', function () {
    gulp.watch(sass_src, ['compile_scss']);
});

gulp.task('default', ['watch']);