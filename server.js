// Require express
var express = require("express");
var app = express();
// Require MySQL
var mysql = require("mysql");
var exphbs = require("express-handlebars");
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Creating connection with database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Indeed@123",
  database: "VOCABS_DB"
})

// Attempting connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//   Root route
app.get("/", function(req, res){
    res.render("index");
})

// All route
app.get("/api/all/words", function(req, res){
    connection.query("SELECT * FROM VOCABS", function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("Server side all api");
        res.send(result);
    })
})

// Server side post script
app.post("/api/words", function(req, res){
    connection.query("INSERT INTO VOCABS SET ?", {
        WORD: req.body.word,
        MASTERED: false
    }, function(err, result){
        if(err) throw err;
        console.log("Inserted valies");
        console.log(result);
        res.send(result);
    })
})

// Server listens for any connection in specified port
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

