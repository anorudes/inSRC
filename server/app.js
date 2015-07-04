var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();

var dbPath = './db/data.json';

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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
	fs.writeFile(dbPath, req.body.data);
	res.send();
});


var server = app.listen(4000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;