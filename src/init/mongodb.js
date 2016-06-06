'use strict';

/**
 * pracice Node.js project
 *
 *@author auronzhong <auronzhong@gmail.com>
 */

import mongoose from 'mongoose';

 module.exports = function (done) {

   const debug = $.createDebug('init:mongodb');
   debug('connecting to MongoDB...');

   const conn = mongoose.createConnection($.config.get('db.mongodb'));
   $.mongodb = conn;
   $.model = {};
   done();

 };
