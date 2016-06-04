var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',function(req, res){
	res.end(req);
});
app.post('/', function(req, res){
	res.send(req.body.editor);
	res.end();
});
app.listen(3000);
console.log("Wysiwyg server is running at port ");
