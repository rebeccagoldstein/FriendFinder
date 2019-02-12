// Dependencies
const path = require("path");

// GET route to /survery to display survery page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// Default route to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});