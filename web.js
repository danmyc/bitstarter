var express = require('express');

var buf = new Buffer(fs.readFileSync('./index.html', 'utf-8'));


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('World!Hye');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
