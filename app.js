var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('lodash');

var app = express();
var root = __dirname;

app.use(bodyParser.urlencoded({extended: false }));
app.use('/bower_components',express.static(path.join(root, '/bower_components')));
app.use('/node_modules',express.static(path.join(root, '/node_modules')));
app.use('/public',express.static(path.join(root, '/public')));

// parse application/json
app.use(bodyParser.json());

//Get Index
app.get('/index', function(req, res){	
	//Lookup using res.render() and research the difference
	res.sendFile(root + '/public/views/view.html');
	console.log("Visited the index page!");
});

// app.get('/patients', function(req, res){
// 	console.log('Visited the patient log in page');
// 	//res.sendFile(root + '/public/views/view.html');
// 	res.status(302).redirect("/view.html#patients");
// });

// app.get('/doctors', function(req, res){
// 	console.log('Visited the patient log in page');
// 	//res.sendFile(root + '/public/views/view.html');
// 	res.status(302).redirect("/view.html#doctors");
// });

app.listen(8080, function(){
	console.log("App listening on port 8080:");
})

