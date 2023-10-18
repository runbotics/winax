var ActiveX = module.exports = require('node-gyp-build')(__dirname);

global.ActiveXObject = function (id, opt) {
    return new ActiveX.Object(id, opt);
};
