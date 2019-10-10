var express = require("express");
var router = express.Router();

// Import the model 
var vocabs = require("../models/vocabs.js");

//   Root route
router.get("/", function(req, res){
  vocabs.select(function(result) {
    var obj = {
      result: result
    };
    console.log("reult");
    console.log(result);
    console.log("Server side all api");
    console.log("Inside root route");
    console.log(obj.result);
    res.render("index", obj);
});
    
})

//   Update table
router.put("/api/words/:id", function(req, res){
    var id = req.params.id;
    var catalog = req.body.catalog;
    vocabs.update(id, catalog, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      })
})

// To delete a word
router.delete("/api/delete/:id", function(req, res){
  var id = req.params.id;
  vocabs.delete(id, function(result){
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  })
})

  // Server side post script to add a new word
  router.post("/api/words", function(req, res){
      vocabs.create(["WORD", "MASTERED"], [req.body.word, req.body.category], function(result){
          res.json({ID: result.insertId});
      })
  })

module.exports = router;
