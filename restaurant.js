const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let reservation = [{
    tableNumber: '',
    tableName: '',
    tableEmail: '',
    tablePhone: '',
}];

let waitList = '';

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});


app.post('/api/reserve', function(req, res) {
    var newReservation = req.body;

    newReservation.routeName = newReservation.tableName.replace(/\s+/g, '').toLowerCase();

    console.log('New Reservation = ' + newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});