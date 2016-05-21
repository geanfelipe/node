const http = require('http');

var options = {
	host:'pokeapi.co',
	path:'/api/v2/pokemon/1/',
	method:'GET'
};

var request = http.request(options, (response) => {
	var data = '';

	console.log('status: '+ response.statusCode);
	console.log('headers: '+JSON.stringify(response.headers));

	response.on('data', (chunk) => {
		data += chunk;
	});

	response.on('end', () => {
		console.log(data);
	});
});

request.on('error', (e) => {
	console.log('Error ${e.message}');
});

request.end();



