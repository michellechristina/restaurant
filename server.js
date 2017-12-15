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
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Table Data and WaitingListData (DATA)
// =============================================================
var tableData = [];
var waitinglistData = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
});

// Get all tableData
app.get("/api/tables", function (req, res) {
    res.json(tableData);
});

// Get all waitinglistData
app.get("/api/waitlist", function (req, res) {
    res.json(waitinglistData);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// We nailed this SOO badd...looks greak k?
