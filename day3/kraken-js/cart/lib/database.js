'use strict';
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);

module.exports = {
  config: function(conf) {

    mongoose.connect('mongodb://' + conf.host + '/' + conf.database);

    var db = mongoose.connection;

    db.on('error', function error(err) {
      console.log('connection error', err)
      process.exit(1);
    });

    db.once('open', function callback() {
      console.log('db connection open');
    });
  }
};
