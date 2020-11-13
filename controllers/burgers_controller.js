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

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.updateOne(
        {
            devoured: req.body.isdevoured
        },
        condition,
        function(result){
            if (result.changedRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
})

router.delete("/api/burgers", function(req, res){
    burger.deleteAll(function(data){
        res.json("burgers deleted");
    })
})





module.exports = router;

