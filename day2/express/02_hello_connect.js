'use strict';

var http = require('http'),
    connect = require('connect'),
    app = connect();

app.use(function hello(req, res, next) {
  res.end("Hello, Connect.");
});

http.createServer(app).listen(3000);