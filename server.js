var express = require('express'),
	app = express(),
	PORT = process.env.PORT || 3000;

// Base configuration
app.use(express.static(__dirname + '/source'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var server = app.listen(PORT, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Corriendo en http://%s:%s', host, port);
});