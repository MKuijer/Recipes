// require webpack
const webpack = require('webpack');

exports.configuration = function(settings) {
    return {
        devtool: 'eval-source-map'
    };
};

exports.rules = function(settings) {
    return {
        module : {
            rules : [
                { // We are using viewEncapsulation so only component styling will apply!
                    test    : /\.scss$/,
                    exclude : /node_modules/,
                    loaders : [
                        'raw-loader',
                        'postcss-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                    exclude : /node_modules/,
                    loaders : [
                        'file-loader'
                    ]
                }
            ]
        }
    }
};
