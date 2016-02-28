var express = require('express');
var app = express();
var port = 3000;

var middleWare = require('./middleware.js');
//commit git

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function(req, res){
	res.send('About us!!!');
});

app.use(express.static(__dirname+  '/public'));

app.listen(port, function(){
	console.log("Express server started on port " + port);
});