const connection = require("../config/connection.js");


function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
    selectAll: function(table, cb){
        let query = `SELECT * FROM ${table};`
        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results)
        })
    } ,
    insertOne: function(table, cols, val, cb){
        let query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(val.length)})`;

        connection.query(query, val, function(err, results){
            if (err) throw err;
            cb(results);
        })
    } ,
    updateOne: function(table, objColVals, condition, cb){
        let query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(query);

        connection.query(query, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    deleteAll: function(table, cb){
      let query = `DELETE FROM ${table};`
      connection.query(query, function(err, results){
        if (err) throw err;
        cb(results);
      })
    }
}

//Methods//

//selectAll()

//insertOne()

//updateOne()

module.exports = orm;

