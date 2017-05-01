// require general tools
const path = require('path');

exports.configuration = function(root) {
    return {
        root          : root,
        nodeModules   : path.join(root, 'node_modules'),
        src           : path.join(root, 'source'),
        build         : path.join(root, 'build')
    }
};
