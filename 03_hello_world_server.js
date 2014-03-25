require('http').createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/plain'});
	res.write("Hello world");
	res.end();
    }).listen(8080);