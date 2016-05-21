const http = require('http');

http.get({
	hostname: 'pokeapi.co',
	path:'/api/v2/pokemon/1/',
}, function(response) {
	console.log('STATUS: '+response.statusCode);
	var body = '';
		
	response.on('data', function(data) {
		body += data;
	});

	response.on('end', function() {
		console.log(body);
	});
});


