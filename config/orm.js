var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


var orm = {
    selectAll: function(table, cb){
        var query = `SELECT * FROM ${table};`
        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results)
        })
    } ,
    insertOne: function(table, cols, val, cb){
        var query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(val.length)})`;

        connection.query(query, val, function(err, results){
            if (err) throw err;
            cb(results);
        })
    }/* ,
    updateOne: function(){

    }  */
}

//Methods//

//selectAll()

//insertOne()

//updateOne()

module.exports = orm;

