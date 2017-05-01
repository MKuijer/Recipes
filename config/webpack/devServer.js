const webpack = require('webpack');

exports.configuration = function(settings) {
    return {
        devServer: {
            host               : settings.devServer.host,
            port               : settings.devServer.port,
            historyApiFallback : true,
            inline             : true,
            stats              : 'errors-only',
            contentBase        : './source/public'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep : true
            })
        ]
    };
};
