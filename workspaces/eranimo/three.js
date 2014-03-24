var http = require('http');

http.createServer(function(req, res) {
    http.get('http://www.google.com/search?q='+req.url.substring(1), function(d) {
        d.pipe(res);
        d.on('data', function(d) {
            console.log('chunk with %d bytes', d.length);
        });
    });

}).listen(8081);