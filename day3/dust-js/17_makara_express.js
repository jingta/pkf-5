var express = require('express'),
    i18n = require('makara'),
    dustjs = require('adaro');

var app = express();

app.engine('dust', dustjs.dust());
app.set('views', 'templates/');
app.set('view engine', 'dust');

app.get('/', function (req, res) {
  // render "index" with a "userName" property
  res.render('index', { userName: 'dshaw' });
});

// decorate express app with Makara
i18n.create(app, {
  contentPath: __dirname,
  fallback: 'en_US'
});

app.listen(3000, function () {
  console.log('Listening on http://localhost:3000/');
});