'use strict';


var kraken = require('kraken-js'),
    app = {},
    express = require('express');

// load in DB 'singleton'
var db = require('./lib/database');

var language = require('./lib/language'); // langugage

/// Configuration hooks
app.configure = function configure(nconf, next) {
  // Fired when an app configures itself

  // set up db
  db.config(nconf.get('databaseConfig'));

  next(null);
};

app.requestStart = function requestStart(server) {
  // Fired at the beginning of an incoming request
};

app.requestBeforeRoute = function requestBeforeRoute(server) {
  // Fired before routing occurs
  server.use(language);
  server.use(express.methodOverride());
};

app.requestAfterRoute = function requestAfterRoute(server) {
  // Fired after routing occurs
};

///
kraken.create(app).listen(function (err) {
  if (err) {
    console.error(err);
  }
});
