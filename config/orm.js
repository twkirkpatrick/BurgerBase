const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, cb){
        const query = `SELECT * FROM ${table};`
        connection.query(query, function(err, results){
            if (err) throw err;

            cb(results)
        })
    }/* ,
    insertOne: function(){

    },
    updateOne: function(){

    } */
}

//Methods//

//selectAll()

//insertOne()

//updateOne()

module.exports = orm;

