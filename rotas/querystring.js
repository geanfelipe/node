const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-type':'text/html'});
	var result = url.parse(request.url, true);
	response.write('<h1>ola '+result.query.nome+'</h1>');
	response.end();
});

server.listen(3000,function() {
	console.log('server running...');
});



