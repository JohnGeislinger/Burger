// ====================================================
// Dependencies
// ====================================================
const express = require("express");
const bodyParser = require("body-parser");

// ====================================================
// Set Up Express
// ====================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ====================================================
// Set Up Handlebars
// ====================================================
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ====================================================
// Routes
// ====================================================
let routes = require("./controllers/burgers_controller.js");
app.use(routes);

// ====================================================
// Listening
// ====================================================
app.listen(PORT, function() {
    console.log("Server listening on PORT: " + PORT);
});