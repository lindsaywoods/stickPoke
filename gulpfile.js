const gulp          = require('gulp');
const autoprefixer  = require('gulp-autoprefixer')
const cssMin        = require('gulp-cssmin');
const sass          = require('gulp-sass');
const browserSync   = require('browser-sync').create();


gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
        .pipe(cssMin())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './src'
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);