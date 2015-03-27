module.exports = function() {

    var client = '.';

    var config = {

        /**
         * Files paths
         */
        alljs: [
            'src/js/**/*.js',
            './*.js'
        ],
        client: client,
        css: 'src/resources/css/*.css',
        index: 'index.html',
        defaultPort: 63342,
        specRunner: 'SpecRunner.html',
        js: [
            'src/js/**/*.js'
        ],
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: 'lib',
            ignorePath: '../..'
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