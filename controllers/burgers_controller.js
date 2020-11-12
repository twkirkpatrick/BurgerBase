var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


//create the router for the app, and export the router at end of file

//ROUTES GO HERE//

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };

        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", function(req, res){

    console.log(req.body.name);
     burger.insertOne(["burger_name"] , [req.body.name], function(result){
        res.json({result});
    }); 
});





module.exports = router;

