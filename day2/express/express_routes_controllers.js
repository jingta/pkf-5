'use strict';

var express = require('express'),
    app = express();

// Use Connect urlencoded middleware to handle POST input.
app.use(express.urlencoded());
app.use(express.logger());

app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

/// controllers
var admin = require('./controller_admin'),
    users = require('./controller_users');

// Pass in Express app and augment with routes.
admin(app);
users(app);


app.listen(3000, function onListening () {
  console.log('Listening at http://localhost:3000');
});
///
