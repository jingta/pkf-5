// Create a simple router module for http.Server. Use request.method
//    and request.url to define response handlers. Return 404 if there are no matches.
var http = require('http'),
    fs = require('fs'),
    mime = require('mime');

var SimpleServer = function (){
    this.routes = [];
    this.server = http.createServer();
    return this;
};
SimpleServer.prototype.start = function (port){
    var self = this;
    if (typeof port === "undefined"){
        port = 8080;
    }
    this.server.once('listening', function() {
        console.log('server is listening at http://localhost:8081');
    });
    var found = false;
    this.server.on('request', function (req, res){
        res.send = function (data, type){
            if (typeof type === "undefined"){
                type = 'text';
            }
            if (type === "text"){
                res.setHeader('content-type', 'text/plain');
            } else if (type === "html"){
                res.setHeader('content-type', 'text/html');
            }
            res.write(data);
            res.end();
        };
        res.sendFile = function (file){
            fs.readFile(file, function(err, bytes) {
                res.setHeader('content-type', mime.lookup(file));
                res.write(bytes.toString());
                res.end();
            });
        };
        self.routes.forEach(function (route){
            if (route.method === req.method && route.path === req.url){
                res.statusCode = 200;
                route.callback.call({}, req, res);
                found = true;
            }
        });
        if(!found){
            res.statusCode = 404;
            res.sendFile('404.html');
        }
    });
    this.server.listen(port);
};
SimpleServer.prototype.on = function (method, path, callback){
    this.routes.push({
        method: method,
        path: path,
        callback: callback
    });
    return this;
};
SimpleServer.prototype.get = function (path, callback){
    this.on('GET', path, callback);
    return this;
};
SimpleServer.prototype.post = function (path, callback){
    this.on('GET', path, callback);
    return this;
};
SimpleServer.prototype.delete = function (path, callback){
    this.on('DELETE', path, callback);
    return this;
};
SimpleServer.prototype.push = function (path, callback){
    this.on('PUSH', path, callback);
    return this;
};

var server = new SimpleServer();
server.get('/', function (req, res){
    res.send('Go here <a href="/text">for text</a>. ' +
        'Or <a href="/file">here</a> for html. Go to <a href="/json">json</a> for json.', 'html');
});
server.get('/file', function (req, res){
    res.sendFile("file.html");
});
server.get('/text', function (req, res){
    res.send('HELLO!', 'text');
});
server.get('/json', function (req, res){
    res.sendFile('example.json');
});
server.start(8081);