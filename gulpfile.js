var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('analisar', function () {
	gulp.src('multi-promise.factory.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
	gulp.run('analisar');
	gulp.watch('multi-promise.factory.js', function (evt) {
		gulp.run('analisar');
	});
});