const http = require('http');
const fs = require('fs');
var index = fs.readFileSync('index.html');

const server = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-type':'text/html'});
	response.write(index);
	response.end();
});

server.listen(3000, function() {
	console.log('server running...');
});

