/**
 * Created by stromero on 3/21/2015.
 */
// Include gulp
var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
// Include Our Plugins

var $ = require('gulp-load-plugins')({lazy: true});

// Global Variables
var options = config.getWiredepDefaultOptions();
var wiredep = require('wiredep').stream;

// Lint Task
gulp.task('lint', function() {

    log('Analyzing source with JSHint and JSCS');

    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose:true}));
      //.pipe(jshint.reporter('fail;'));
});

// Inject Custom/ThirdParty JavaScript and ThirdParty CSS into index.html
gulp.task('wiredep', function() {
    log('Wire up the bower css js and our app js into the index.html');

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js, {read: false}), {relative: true}))
        .pipe(gulp.dest(config.client));
});

// Inject Custom/ThirdParty JavaScript and ThirdParty CSS into SpecRunner.html
gulp.task('wiredep-test', function() {
    log('Wire up the bower js and our app js into the SpecRunner.html');

    return gulp
        .src(config.specRunner)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js, {read: false}), {relative: true}))
        .pipe(gulp.dest(config.client));
});

// Inject only custom css
gulp.task('inject', ['wiredep','wiredep-test'], function() {
    log('Wire up the app css into the html, and call wiredep ');
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css, {read: false}), {relative: true}))
        .pipe(gulp.dest(config.client));
});

gulp.task('browsersync', function() {

    browserSync.init(['.src/resources/**.*', './src/js/**.*'], {
        server: {
            baseDir: "./"
        }
    });
});

// Watch Files For Changes then run lint and add-scripts
gulp.task('watch', ['browsersync','inject'], function() {
    gulp.watch(config.alljs, ['inject','browsersync']);
});

// Default Task
gulp.task('default', ['watch']);

//// functions
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function startBrowserSync() {

    log('Starting browser-sync on port ');

    var options = {
        proxy: 'localhost:63342',
        port: 63342,
        files: ['**/*.*'],
        ghostMode: {
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 0 //1000
    };

    browserSync(options);
}