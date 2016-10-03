var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.sendFile(__dirname + '/index.html')
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static('src'));

app.listen(3000, function () {
  console.log('listening on http://localhost:3000/');
});