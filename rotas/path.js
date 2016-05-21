const http = require('http');

const server = http.createServer(function(request, response) {
	response.writeHead(200,{'Content-type':'text/plain'});
	if(request.url=='/') {
		response.write('voce ta na home, jovial');
	}else if(request.url=='/ola') {
		response.write('ola');
	}else {
		response.write('pagina nao encontrado');
	}
	response.end();
});

server.listen(3000,function() {
	console.log('server running...');
});


