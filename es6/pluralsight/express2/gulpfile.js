const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const nodemon = require('gulp-nodemon');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', _ => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    const wiredep = require('wiredep').stream;

    const inject = require('gulp-inject');

    const injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], { read: false });

    const injectOptions = {
        ignorePath: '/public'
    };

    /*
    * bootstrap 4.0 not working with this for some reason
    * */
    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views/'));

});

gulp.task('serve', ['style', 'inject'], _ => {
    const options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 9000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', ev => {
            console.log('Restarting...');
        });
});