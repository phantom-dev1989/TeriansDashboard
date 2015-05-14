/**
 * Created by stromero on 3/21/2015.
 */
// Include gulp
var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
var karma = require('karma').server;
// Include Our Plugins

var $ = require('gulp-load-plugins')({lazy: true});

// Global Variables
var options = config.getWiredepDefaultOptions();
var wiredep = require('wiredep').stream;

gulp.task('help', $.taskListing);

// Default Task
gulp.task('default', ['help']);

gulp.task('build',['optimize'], function() {
    log('Building the Javascript, HTML, and CSS source code');
});

// Clean build folder tasks
gulp.task('clean', function(done) {
    var delconfig = [].concat(config.build, config.temp);
    log('Cleaning: ' + $.util.colors.blue(delconfig));
    del(delconfig, done);
});

gulp.task('clean-fonts', function(done) {
    clean(config.build + 'fonts/**/*.*', done);
});

gulp.task('clean-images', function(done) {
    clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean-code', function(done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    clean(files, done);
});

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function() {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.version;
    var options = {};
    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }
    log(msg);

    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root))
});

// Adding to build file tasks
gulp.task('optimize',['inject','template-cache','fonts','images','html'], function() {
    log('Optimizing the javascript, css, html');

    // gulp-useref looks for the following comments to read the css and js files inorder to combine them
    // buid:css lib.css
    // build:css app.css
    // build:js lib.js
    // build:js app.js
    var assets = $.useref.assets({searchPath: './'});
    var templateCache = '.tmp/templates.js';
    var cssFilter = $.filter('**/*.css');
    var jsLibFilter = $.filter('**/lib.js');
    var jsAppFilter = $.filter('**/app.js');

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(templateCache, {read: false}), {
            starttag: '<!-- inject:templates:js -->'
        }))
        .pipe(assets)
        .pipe(cssFilter) // get css and minify with gulp-csso and restore to pipeline
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(jsLibFilter) // get javascript minify with uglify and restore to pipeline
        .pipe($.uglify())
        .pipe(jsLibFilter.restore())
        .pipe(jsAppFilter)// get angular javascript minify with uglify and restore to pipeline, also annotates custom angular code
        .pipe($.ngAnnotate({add: true}))
        .pipe($.uglify())
        .pipe(jsAppFilter.restore())
        .pipe($.rev())// app.js --> app.1j88889jr.js cache busting
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())// renaming in index.html
        .pipe(gulp.dest(config.build))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.build));
});


// template cache, warm it up, allows angular to use template chache instead of going to server
gulp.task('template-cache',['clean-code'], function(done) {
    log('Creating AngularJS $templateCache');

    return gulp.src(config.htmltemplates)
        .pipe($.minifyHtml({empty:true}))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options))
        .pipe(gulp.dest(config.temp));
});

// pipe images to build folder
gulp.task('images',['clean-images'], function() {

    log('Copying and compressing images to build folder');

    return gulp.src(config.images)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build + 'src/resources/img'));

});

// pipe in fonts to build folder
gulp.task('html', function() {

    log('Copying html to build folder');

    return gulp.src(config.htmltemplates)
        .pipe(gulp.dest(config.build + 'src/html'));

});

// pipe in fonts to build folder
gulp.task('fonts',['clean-fonts'], function() {

    log('Copying fonts to build folder');

    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));

});

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

    // startBrowserSync();

     browserSync.init(['.src/resources/!**.*', './src/js/!**.*'], {
        server: {
            baseDir: "./"
        }
    });
});

// Watch Files For Changes then run lint and add-scripts
gulp.task('watch', ['browsersync','inject'], function() {
    gulp.watch(config.alljs, ['inject','browsersync']);
});

// unit test tasks
gulp.task('test', function (done) {

    karma.start({
        configFile: __dirname + '/karma.config.js'
    }, done);
});

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

// browser sync options
function startBrowserSync() {

    var port = 3000;

    if(args.nosync || browserSync.active){
        return;
    }

    log('Starting browser-sync on port ' + port);

    var options = {
        proxy: 'localhost:'+ port,
        port: port,
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