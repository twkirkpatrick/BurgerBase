const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();


//create the router for the app, and export the router at end of file

//ROUTES GO HERE//

router.get("/", function(req, res){
    burger.selectAll(function(data){
        const burgObj = {
            burgers: data
        };

        console.log(burgObj);
        res.render("index", burgObj);
    });
})





module.exports = router;

