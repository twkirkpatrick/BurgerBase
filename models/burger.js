var orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, val, cb){
        orm.insertOne("burgers", cols, val, function(res){
            cb(res);
        });
    }
}





module.exports = burger;