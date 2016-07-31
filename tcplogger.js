// tcplogger - log any tcp connection to console

var net = require('net');
var server = net.createServer(function(socket) {
	var client = socket.remoteAddress;
	console.log("Connection from "+ client);
	socket.on('data', function(data) { 
		console.log(data);
	});
	socket.on('end', function(end) {
		console.log("Connection closed by " + client);
	});
});

server.listen(7000);

console.log("TCP logger listening on port 7000");

