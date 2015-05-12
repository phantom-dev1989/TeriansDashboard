module.exports = function() {

    var client = './';
    var temp = './.tmp/';

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
                root: '/'
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

    return config;
};