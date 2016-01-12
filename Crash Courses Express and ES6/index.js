var express = require('express');

var app = express();

// app.get('/', (req, res) => res.send('hello nodemon!'));

app.use(express.static('public'));

app.listen(3000);