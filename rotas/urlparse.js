const http = require('http');
const url = require('url');


const server = http.createServer(function(request, response) {
	
	var result = url.parse(request.url, true);
	response.writeHead(200,{'Content-type':'text/plain'});
	
	if(result.pathname=='/') {
		response.write('Voce ta na home!');
	}else {
		response.write('Pagina nao encontrada');
	}
	response.end();	
	
});

server.listen(3000, function() {
	console.log('server running...');
});


