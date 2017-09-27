const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json())

app.get('/', function(req,res) {
  res.sendFile("index.html", {"root": __dirname});
});

app.get('/todo', function(req, res) {
  res.send(req.body);
})

app.post('/todo', function(req, res) {
  console.log(req.body, 'this is body')
  bodyParser(req);
  res.send(req.body);
})

app.listen(3000, function() {
  console.log('Listening on port 3000!');
})