var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var port = 3300; // port

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + 'compiled/views/')); // static files

app.listen(port, function () {
	// listening
	console.log('CoolServer on port: ', port);
});
