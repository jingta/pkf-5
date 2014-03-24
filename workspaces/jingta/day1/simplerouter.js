var http = require('http');

var server = http.createServer();

var routes = {
    '/hello': {
	'GET': function(req, res) { 
	    res.writeHead(200, {'content-type': 'text/plain'});
	    res.write('Hello World\n');
	    res.end();
	}
    }
}

function route(req, res) {
  var method = req.method;
  var url = req.url;
  console.log("Requesting " + method + " " + url);
  if (routes[url] == undefined || routes[url][method] == undefined) {
    // no match, 404
    res.writeHead(404, {'content-type': 'text/plain'});
    res.write("404'd\n");
    res.end();
  } else {
    routes[url][method](req, res);
  }
}

server.on('request', function(req, res) {
  route(req, res);
}).listen(8000, function() {
  console.log('server is listening at http://localhost:8000');
});

