var express = require('express');
var buffer = new buffer(50);
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString(fs.readFileSync('./index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// var buffer = new buffer(50);
// buffer.toString(fs.readFileSync('./index.html'));
