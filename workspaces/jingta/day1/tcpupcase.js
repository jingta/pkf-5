var net = require('net');
var server = net.createServer();
var Transform = require('stream').Transform;

function createUpcaseTransform(socket) {
    var upcase = new Transform({ decodeStrings: 'utf8' });
    upcase.prefix = socket.remoteAddress + ':' + socket.remotePort;
    upcase._transform = function _transform(buf, encoding, done) {
	this.push(buf.toString().toUpperCase());
	done();
    };
    return upcase;
}


server.on('connection', function(socket) {
  //socket.setEncoding('utf8'); // better??
  var transformer = createUpcaseTransform(socket);
  var transformed = socket.pipe(transformer);
  transformed.pipe(process.stdout);
  transformed.pipe(socket);
  console.log('new connection from', transformer.prefix);

  socket.once('end', function() {
    console.log(transformer.prefix, 'disconnected');
  });
}).listen(8000, function() {
  console.log('TCP server is listening on port 8000');
});

