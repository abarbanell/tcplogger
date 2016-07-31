// tcplogger - log any tcp connection to console

var net = require('net');
var log = function(s) {
	var d = new Date();
	console.log(d.toISOString() + ' - ' + s);
};

var server = net.createServer(function(socket) {
	var client = socket.remoteAddress;
	log("Connection from "+ client);
	socket.on('data', function(data) { 
		log('STR:  ' + data.toString());
	});
	socket.on('end', function(end) {
		log("Connection closed by " + client);
	});
});

server.listen(7000);

log("TCP logger listening on port 7000");

