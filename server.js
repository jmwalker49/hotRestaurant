// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var customer = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/tables", function(req, res) {
let tableArray = [];
    for (var i = 0; i <= 4; i++) {
      console.log(i);
      tableArray.push(customer[i]);
      }

    res.json(tableArray);
  });

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/wait", function(req, res) {
  let waitArray = [];

    for (var i = 5; i < customer.length; i++) {

        waitArray.push(customer[i]);
      }
    res.json(waitArray);
  });

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcustomer = req.body;
  
  console.log(newcustomer);

  customer.push(newcustomer);

 
});

app.post("/api/clear", function(req, res) {
  
  
  customer = [];

 
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
