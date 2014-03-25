var async = require('async'),
    request = require('request');

if (process.argv.length < 5) {
  return console.log('Usage: node 03_github_watchers.js <username> <token> <user/repo>');
}

var url = 'https://api.github.com/';
var auth = {
  headers: {'User-Agent' : 'nodefirm' },
  auth: { user: process.argv[2],  pass: process.argv[3] },
  json: true
};

request.get(url + 'repos/' + process.argv[4] + '/contributors', auth, function(err, res, array) {
  if (err) throw err;
  async.map(array, function(contributor, callback) {
    request.get(url + 'users/' + contributor.login + '/keys', auth, function(err, res, array) {
      if (err) throw err;

      callback(null, [contributor.login, (array.length) ? array[0].key : '']);
    });
  }, function(err, results) {
    console.log(results);
  });
});
