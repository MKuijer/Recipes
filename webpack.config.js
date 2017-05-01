// require webpack tools
const merge = require('webpack-merge');

// require general tools
const path = require('path');

// project webpack configuration
const Paths       = require('./config/webpack/paths');
const Core        = require('./config/webpack/core');
const DevServer   = require('./config/webpack/devServer');

const Development = require('./config/webpack/environments/development');
const Production  = require('./config/webpack/environments/production');
const Test        = require('./config/webpack/environments/test');

// variable definitions
const settings = {
    script    : process.env.npm_lifecycle_event,
    debug     : !!process.env.npm_config_debug,
    paths     : Paths.configuration(__dirname),
    devServer : {
        host : '0.0.0.0',
        port : 3000
    }
};

var configuration = merge({}, Core.configuration(settings), Core.rules(settings));

switch(settings.script) {
    case 'build' :
        break;

    case 'start' :
        configuration = merge(
            configuration,
            DevServer.configuration(settings),
            Development.configuration(settings),
            Development.rules(settings)
        );
        break;

    case 'test' :
        configuration = merge(
            configuration,
            DevServer.configuration(settings),
            Test.configuration(settings),
            Test.rules(settings)
        );
        break;
}

if (settings.debug) {
    console.log('Building the configuration with these settings', JSON.stringify(settings, null, 2));
    console.log('Building with this configuration :', JSON.stringify(configuration, null, 2));
}

module.exports = configuration;