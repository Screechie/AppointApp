var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var root = __dirname;

app.use(bodyParser.urlencoded({extended: false }));
app.use('/bower_components',express.static(path.join(root, '/bower_components')));
app.use('/public',express.static(path.join(root, '/public')));

// parse application/json
app.use(bodyParser.json());

app.get('/index', function(req, res){
	// res.render('index');
	res.sendFile(root + '/public/views/index.html');
	console.log("Visited the index page!");

});

app.listen(8080, function(){
	console.log("App listening on port 8080:");

})

