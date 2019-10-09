var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var vocabs = require("../models/vocabs.js");

//   Root route
router.get("/", function(req, res){
    res.render("index");
})

// All route to get all words
router.get("/api/all/words", function(req, res) {
    vocabs.select(function(result) {
        
            console.log(result);
            console.log("Server side all api");
            res.send(result);
    });
  });

  // Server side post script to add a new word
  router.post("/api/words", function(req, res){
      vocabs.create(["WORD", "MASTERED"], [req.body.word, false], function(result){
          res.json({ID: result.insertId});
      })
  })

module.exports = router;
