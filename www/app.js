var express = require('express');
var app = express(); 
app.disable('etag');
var lastTime = new Date();


var connected = false;
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
	console.logr(req);
	res.sendStatus(200);
});
app.get('/status', function (req, res) {
	// console.log("HERE");
	var duration  = (Date.now() - lastTime)/1000;
	console.log(duration);
	if(duration < 10){
		
		connected = true;
	}
	else{
		connected = false;	
	}

	if(connected){
		console.log("connected");
		// res.sendFile(__dirname+'/index_alt.html');
		res.send("connected");
	}
	else{
		console.log("disconnected");
		res.send("disconnected");
		// res.sendFile(__dirname+'/index.html');
	}

});

app.get('/alive', function (req, res) {
	console.log("alive");
	lastTime = Date.now();
	res.sendStatus(200);
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	lastTime = Date.now();
	console.log('Example app listening at http://%s:%s', host, port);

});
