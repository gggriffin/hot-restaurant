const express = require('express');

const app = express();
const PORT = 3000;

let reservation = {
    tableNumber: '',
    tableName: '',
    tableEmail: '',
    tablePhone: '',
};

let waitList = '';

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/waitList', function (req, res) {
    res.sendFile(path.join(__dirname, 'table.html'));
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});