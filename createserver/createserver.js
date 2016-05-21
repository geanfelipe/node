const http = require('http');

const server = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-type':'text/plain'});
	response.write('hello world!');
	response.end();
});

server.listen(3000, function() {
	console.log('server running...');
});


