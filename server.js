var express = require('express');
var app = express();
var port = 3000;

var middleWare = {
	requireAuthentication: function(req, res, next)
	{
		console.log('Private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log(new Date().toString() + ' : - Request:' + req.method + ' ' + req.originalUrl); 
		next();
	}
};

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function(req, res){
	res.send('About us!');
});

app.use(express.static(__dirname+  '/public'));

app.listen(port, function(){
	console.log("Express server started on port " + port);
});