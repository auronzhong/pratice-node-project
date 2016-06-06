'use strict';

/**
 * pracice Node.js project
 *
 *@author auronzhong <auronzhong@gmail.com>
 */



 module.exports = function (done) {
  $.router.get('/', function (req, res ,next) {
    res.end(`现在是北京时间${new Date()}`);
  });

  done();
};
