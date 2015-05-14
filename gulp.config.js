module.exports = function() {

    var client = './';
    var root = './';
    var temp = './.tmp/';
    var report = './report/';
    var wiredep = require('wiredep');
    var bowerFile = wiredep({devDependencies: true})['js'];

    var config = {

        /**
         * Files paths
         */
        // all js to lint
        alljs: [
            './src/js/**/*.js',
            './*.js'
        ],
        client: client,
        css: './src/resources/css/*.css',
        index: 'index.html',
        defaultPort: 63342,
        specRunner: 'SpecRunner.html',
        build: './build/',
        images : './src/resources/img/**/*.*',
        fonts:'./lib/font-awesome/fonts/**/*.*',
        temp : temp,
        htmltemplates: './src/html/**/*.html',
        js: [
            './src/js/**/*.js'
        ],
        root: root,
        packages: [
            './package.json',
            './bower.json'
        ],
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './lib',
            ignorePath: '../..'
        },
        /**
         * angular emplate cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app',
                standAlone: false,
                root: './'
            }
        }

    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    config.getKarmaOptions = function() {
        var options = {
            files: [].concat(
                bowerFile,
                './src/js/**/*.js',
                './src/test/spec/*.js'
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters:[
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'}
                ]
            },
            preprocessors:{

            }
        };
        options.preprocessors[client + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    };


    return config;
};