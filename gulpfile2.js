// gulp

// requerimos gulp principalmente en variable constante o normal
const gulp = require('gulp'),
    // browsersync tambien
	browserSync = require('browser-sync').create();


// gulp comprobacion y ejecucion

// funcion principal
gulp.task('default', () => {
	browserSync.init({
		server: './'
	});


    // modulo de camibio en gulp
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./css/style.css').on('change',browserSync.reload);
	gulp.watch('./js/script.js').on('change',browserSync.reload);

})