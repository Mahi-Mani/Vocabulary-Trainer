// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var vocabs = {
    create: function(cols, vals, cb){
        orm.create("VOCABS", cols, vals, function(res) {
            cb(res);
          });
        },
          select: function(cb) {
              orm.select("VOCABS", function(res){
                  cb(res);
              })
          }
}

module.exports = vocabs;