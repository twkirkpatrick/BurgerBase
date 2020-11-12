$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger =  {
            name : $("#burg-input").val().trim()
        
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("new burger added");
            location.reload();
        })
    })













})