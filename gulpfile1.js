var gulp = require('gulp');
var w3cjs = require('gulp-w3cjs');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('htmllint', gulp.series(function (done) {
    gulp.src('*.html')
        .pipe(w3cjs());
        done()
}));


gulp.task('csslint', gulp.series(function(done) {
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
    done()
}));

gulp.task('lint', gulp.series(function(done) {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
    done()
}));

// Watch Files For Changes & Reload
gulp.task('serve', gulp.series(function (done) {
    browserSync({
        notify: false,
        // Customize the BrowserSync console logging prefix
        logPrefix: 'WSK',
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        watch: true,
        server: './'
        //server: ['.tmp', '.']
    });


    gulp.watch('*.html').on('change', reload)
    gulp.watch('templates/**/*.html').on('change', reload)
    gulp.watch('css/*.css').on('change', reload)
    gulp.watch('js/*.js').on('change', reload)
    gulp.watch('img/**/*').on('change', reload)


    done()

}));

gulp.task('default', gulp.series(function(done) {
  gulp.start('htmllint', 'csslint', 'lint');
  done()
}));
