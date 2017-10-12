const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
	/* Run ESLint */
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
		
	/* Node Source */
	gulp.src("es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));

	/* Browser Source */
	gulp.src("public/es6/**/*.js")	
		.pipe(babel())
		.pipe(gulp.dest("public/dest"));
});