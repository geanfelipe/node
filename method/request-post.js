const http = require('http');
const querystring = require('querystring');

var postData = querystring.stringify({msg:'hello world'});
var options = {
	host:'localhost',
	path:'/',
	port:3000,
	method:'POST'
};

var callback = function(response) {
	var data = '';
	
	response.setEncoding('utf-8');
	response.on('data', (chunk) => {
		data += chunk;
	});

	response.on('end', () => {
		console.log('dados: '+data);
	});
};


var request = http.request(options,callback);

request.on('error', (e) => {
	console.log('error');
});


request.write(postData);
request.end();


