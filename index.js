var express = require('express');
var app = express();

var NEM = require('./lib/NEM.js');
var nem = new NEM(null);


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');


app.get('/', function(request, response) {
	 res.sendFile(__dirname  + "/public/index.html");
});


app.get('/status', function(request, response) {
	 
	nem.nisGet('/status',null,function(err) {
		response.json(err);
	},function(res) {
 	   	response.json(res);
 	});

});

app.get('/account/generate', function(request, response) {

	nem.nisGet('/account/generate',null,function(err) {
		response.json(err);
	},function(res) {
 	   	response.json(res);
 	});

});


app.get('/getaccount/:address', function(request, response) {

	var data = {address: request.params.address};

	console.log('acc : ', request.params.address);

	nem.nisGet('/account/get',data,function(err) {
		response.json(err);
	},function(res) {
 		 response.json(res);
 	});

});
//-- Run server 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


