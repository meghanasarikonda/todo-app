const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req,res) {
  res.sendFile("index.html", {"root": __dirname});
});
app.listen(3000, function() {
  console.log('Listening on port 3000!');
})