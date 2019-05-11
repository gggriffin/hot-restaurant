const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let newReservation = [{
<<<<<<< HEAD
    customerName: '',
    phoneNumber: '',
    customerEmail: '',
    customerID: '',
}];
=======
>>>>>>> 7a76e593af76319beebfb773abfa06fa8e522425

}]

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
app.get('/api/waitlist', function (req, res) {
    res.json(newReservation);
});

app.post('/api/tables', function(req, res) {
    var reservation = req.body;

<<<<<<< HEAD
    //newReservation.routeName = newReservation.tableName.replace(/\s+/g, '').toLowerCase();
=======
app.post('/api/tables', function(req, res) {
    var newReservation = req.body;
>>>>>>> 7a76e593af76319beebfb773abfa06fa8e522425

    console.log('New Reservation = ' + newReservation);

    newReservation.push(reservation);

    res.json(waitList);
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
<<<<<<< HEAD
''

/*$(".submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var newReservation = {
      customerName: $("#reserve-name").val().trim(),
      phoneNumber: $("#reserve-phone").val().trim(),
      customerEmail: $("#reserve-email").val().trim(),
      customerID: $("#reserve-unique-id").val().trim()
    };

    console.log(newReservation);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/tables", newReservation,
      function(data) {

        // If a table is available... tell user they are booked.
        if (data) {
          alert("Yay! You are officially booked!");
        }

        // If a table is available... tell user they on the waiting list.
        else {
          alert("Sorry you are on the wait list");
        }

        // Clear the form when submitting
        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
        $("#reserve-unique-id").val("");

      });

  });*/
=======
>>>>>>> 7a76e593af76319beebfb773abfa06fa8e522425
