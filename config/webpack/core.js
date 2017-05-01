const webpack = require('webpack');

// require general tools
const path = require('path');

// require webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer      = require('autoprefixer')({ browsers: ['last 3 versions'] });

exports.configuration = function(settings) {
    return {
        resolve : {
            extensions : [
                '.ts',
                '.scss',
                '.html',
                '.js'
            ],
            modules: [
                settings.paths.nodeModules,
                settings.paths.src
            ]
        },
        entry: {
            application : settings.paths.src
        },
        output: {
            path     : settings.paths.build,
            filename : '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template : path.join(settings.paths.src, 'public', 'index.html'),
                inject   : 'body',
                title    : 'Glass.io'
            }),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                settings.paths.src
            ),
            new webpack.LoaderOptionsPlugin({
                debug: settings.debug,
                options : {
                    sassLoader : {},
                    postcss : [ autoprefixer ],
                    tslint : {
                        emitErrors: true,
                        failOnHint: true
                    }
                }
            })
        ]
    }
};

exports.rules = function(settings) {
    return {
        module: {
            rules : [
                {
                    test : /\.ts$/,
                    include : settings.paths.src,
                    loaders : ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ]
        }
    }
};
