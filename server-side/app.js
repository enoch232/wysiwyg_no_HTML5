var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',function(req, res){
	res.end(req);
});
app.post('/', function(req, res){
	res.send(req.body.editor);
	res.end();
});
app.listen(port);
console.log("Wysiwyg server is running at port "+port);
