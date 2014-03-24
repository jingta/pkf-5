'use strict';

var express = require('express'),
    app = express();

///
app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

///
app.listen(3000, function onListening() {
  console.log('Listening on port 3000');
});
