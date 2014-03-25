'use strict';

var kraken = require('kraken-js'),
  app = {};
/// Set up the db to be used on ./index.js
var db = require('./lib/database');

app.configure = function configure(nconf, next) {
  // Fired when an app configures itself
  //Configure the database
  db.config(nconf.get('databaseConfig'));
  next(null);
};
/// 

app.requestStart = function requestStart(server) {
  // Fired at the beginning of an incoming request
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
  // Fired before routing occurs
};


app.requestAfterRoute = function requestAfterRoute(server) {
  // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
  if (err) {
    console.error(err);
  }
});
