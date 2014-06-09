var todos = [{
	id : 1,
	discription : "pick up milk!",
	status : "complete"
}, {
	id : 2,
	discription : "Get a car wash!",
	status : "incomplete"
}];

var todo = {
	id : 1,
	discription : "pick up milk!",
	status : "complete"
};

var express = require('express'),
    app = express();

app.engine('html', require('ejs').renderFile);
app.set('/js', express.static(__dirname + "/js"));

var obj = { "foo" : "bar" };
app.get('/', function(req, res) {

    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(todo);
}); 

app.listen(8124);

console.log('server running at http://localhost:8124/');
