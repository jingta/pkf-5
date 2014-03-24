'use strict';

var kraken = require('kraken-js'),
  app = {};
var db = require('./lib/database');

/// require our language library
var language = require('./lib/language');
///

app.configure = function configure(nconf, next) {
  // Fired when an app configures itself
  //Configure the database
  db.config(nconf.get('databaseConfig'));
  next(null);
};

app.requestStart = function requestStart(server) {
  // Fired at the beginning of an incoming request
};

/// set up the server so it's used before a route
app.requestBeforeRoute = function requestBeforeRoute(server) {
  // Fired before routing occurs
  server.use(language);
};
///

app.requestAfterRoute = function requestAfterRoute(server) {
  // Fired after routing occurs
};


kraken.create(app).listen(function (err) {
  if (err) {
    console.error(err);
  }
});
