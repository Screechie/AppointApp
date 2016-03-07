var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var root = __dirname;

app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(root, 'public')));
//Serve bower files for jquery and bootstrap etc...
app.use('/bower_components',express.static(path.join(root, '/bower_components')));
// parse application/json
app.use(bodyParser.json());

app.get('/index.html', function(req, res){
	res.render('index')
});

app.listen(8080, function(){
	console.log("App listening on port 8080:");

})

