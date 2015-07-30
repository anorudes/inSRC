var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var path = require('path');
var app = express();

var dbPath = path.join(__dirname, '../db/', 'data.json');
var configPath = path.join(__dirname, '../client/', 'config.json');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data/get', function (req, res) {
	fs.readFile(dbPath, function(err, data){
		
		// file doesn't exist
		if (err && err.errno === -4058) {
			data = '[]';
			fs.writeFile(dbPath, data);
		}
		res.header("Content-Type", "application/json");
		res.send(data);
	});
});

app.post('/data/update', function (req, res) {
	if (typeof req.body.data === 'undefined') {
		res.status(400).send();
		return;
	}
	fs.writeFile(dbPath, JSON.stringify(req.body.data));
	res.send();
});

app.post('/config/update', function (req, res) {
  if (typeof req.body.data === 'undefined') {
    res.status(400).send();
    return;
  }
  fs.writeFile(configPath, JSON.stringify(req.body.data));
  res.send();
});

var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server is listening at http://%s:%s', host, port);

});

module.exports = app;