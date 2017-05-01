'use strict';

module.exports = function (config) {
    config.set({
        autoWatch: true, // retest on changes
        browsers: ['PhantomJS'], // browsers used in testing
        files: [ // what files we will track (the entry file will leverage typescript and webpack to really track files)
            '../../node_modules/babel-polyfill/dist/polyfill.js',
            'entry.js'
        ],
        frameworks: ['jasmine'], // the test frameworks we'll use
        logLevel: config.LOG_INFO, // level of logging
        phantomJsLauncher: { // settings for the "test" browser
            exitOnResourceError: true
        },
        preprocessors: { // used to chain dependencies
            'entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'], // the reporter used to display "success" tests
        singleRun: false, // tells karma to finish when its done instead of keep watching files to change and re-test
        webpack: require('../../webpack.config'),  // where the webpack config is at for karma
        webpackServer: {
            noInfo: true // don't display too much when running karma
        },
        port: 9876, // the port karma will run tests at
        colors : true, // display info in colors
        concurrency : Infinity // sets how many browsers can be instantiated for testing
    });
};
