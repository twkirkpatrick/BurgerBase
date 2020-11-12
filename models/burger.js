const orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
}





module.exports = burger;