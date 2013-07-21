var express = require('express');
var buffer = new Buffer(fs.readFileSync('./index.html'), "utf-8");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// var buffer = new buffer(50);
// buffer.toString(fs.readFileSync('./index.html'));
