var http = require('http'),
    httpProxy = require('http-proxy');

// Create your proxy server and set the target in the options.
httpProxy.createProxyServer({target:'http://google.com'}).listen(8000);
///#q=hi&safe=off