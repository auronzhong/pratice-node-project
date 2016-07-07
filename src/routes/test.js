'use strict';

/**
 * pracice Node.js project
 *
 *@author auronzhong <auronzhong@gmail.com>
 */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

module.exports = function (done) {

    $.router.get('*', function (req, res, next) {
        if (req.url.indexOf('/api/') !== 0 && req.url.indexOf('/build/') !== 0) {
            res.sendFile(_path2.default.resolve(__dirname, '../../frontend/index.html'));
        } else {
            next();
        }
    });

    done();
};