var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/characters');

var createdChar = mongoose.model('createdChar', {
	charName: String,
	raceName: String,
	charStats: Object,
	charClass: String
});

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/races', function(req, res) {
	fs.readFile(path.join(__dirname, 'races.json'), function(err, data) {
		if(err) {
			console.log(err);
		}
		res.send(JSON.parse(data));
	});
});

app.post('/character', function(req, res) {
	var newChar = new createdChar({
		charName: req.body.charName , 
		raceName: req.body.raceName, 
		charStats: req.body.charStats, 
		charClass: req.body.charClass
	});
	newChar.save(function(err) {
		if(err) {
			res.send(500);
		}
		else {
			res.send(newChar);
		}
	})
});

app.listen(8000, function() {
	console.log('Server running on port 8000');
});
