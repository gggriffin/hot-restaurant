const express = require('express');

const app = express();
const PORT = 3000;

var reservation = '';

var waitList = '';

app.get('/', function (req, res) {
    'Welcome to our Hot Restaurant'
});

app.get('/reservation', function (req, res) {
    res.json(reservation);
});

app.get('/waitList', function (req, res) {
    res.json(waitList);
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});