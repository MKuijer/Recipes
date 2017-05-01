'use strict';

exports.configuration = function(settings) {
    return {
        devtool: 'inline-source-map'
    };
};

exports.rules = function(settings) {
    return {
        module : {
            rules: [
                {
                    test: /\.ts$/,
                    enforce : 'pre',
                    exclude: settings.paths.nodeModules,
                    loader: 'tslint-loader'
                }
            ]
        }
    }
};
