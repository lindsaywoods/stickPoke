const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();


gulp.task('styles', () => {
    return gulp.src('sass/styles.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);