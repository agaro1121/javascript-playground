const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulpMocha = require('gulp-mocha');
const env = require('gulp-env');

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

    nodemon({
        script: './es6/pluralsight/express/app.js',
        ext: 'js',
        env: {
            PORT: 9000
        },
        ignore: ['./node_modules/**']
    }).on('restart', () => {
        console.log("Restarting...");
    });
});

gulp.task('test', () => {
    env({vars: {ENV: 'Test'}});
    gulp.src('./es6/pluralsight/express/tests/*.js', {read: false})
        .pipe(gulpMocha({ reporter: 'nyan' }));
});
