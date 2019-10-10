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
          },
          update: function(id, catalog, cb){
              orm.update("VOCABS", id, catalog, function(res){
                  cb(res);
              })
          },
          delete: function(id, cb){
              orm.delete("VOCABS", id, function(res){
                  cb(res);
              })
          }
}

module.exports = vocabs;