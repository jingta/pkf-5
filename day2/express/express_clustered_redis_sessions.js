'use strict';

var cluster = require('cluster');

function createServer () {
  /// createServer() to start a worker process
  var express = require('express'),
      cons = require('consolidate'),
      RedisStore = require('connect-redis')(express), // pass express to extend express.session.Store
      app = express(),
      requests = 0;

  require('dustjs-helpers');
  app.engine('dust', cons.dust);
  app.set('view engine', 'dust');

  app.use(express.cookieParser());
  app.use(express.session({ store: new RedisStore(), secret: 'adorable seamonster' }))

  app.get('/', function(req, res) {
    if (requests++ == 5)
      return process.exit(0);

    req.session.viewCount = (req.session.viewCount || 0) + 1;

    console.log('Request handled by PID', process.pid, 'view count =', req.session.viewCount);

    res.render('sessions', {
      viewCount: req.session.viewCount
    });
  });

  app.listen(3000, function onListening () {
    console.log(process.pid, 'Listening at http://localhost:3000');
  });
  ///
}

if (cluster.isMaster) {
  // start two workers
  cluster.fork();
  cluster.fork();

  // start a new worker when one dies
  cluster.on('exit', function(worker, code, signal) {
    console.log('worker %d died (%s). restarting...', worker.process.pid, signal || code);
    cluster.fork();
  });
} else {
  createServer();
}