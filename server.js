// Require express
var express = require("express");
var app = express();

var exphbs = require("express-handlebars");
// require("dotenv").config();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/vocabs_controller.js");

app.use(routes);

// Server listens for any connection in specified port
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

