'use strict';

module.exports = function (server) {

  var users = 'bill jeff erik'.split(' ');

  server.get('/users', function (req, res) {
    res.send(users.join('\n'));
  });

  // Add a user: `curl --data 'user=dshaw' http://localhost:3000/users`
  server.post('/users', function (req, res) {
    if (req.body.user && req.body.user.length > 0) {
      users.push(req.body.user);
      res.send(201);
    } else {
      res.send(400);
    }
  });

};
