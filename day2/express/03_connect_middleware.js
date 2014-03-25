'use strict';

var http = require('http'),
    connect = require('connect'),
    app = connect();

/// simple logging middleware

var simpleLoggingMiddleware = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

app.use(simpleLoggingMiddleware);

app.use(function hello(req, res, next) {
  res.end("Hello, Connect.");
});

http.createServer(app).listen(3000);

///