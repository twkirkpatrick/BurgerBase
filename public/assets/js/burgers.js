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
    });

    $(".devour").on("click", function(){
        var id = $(this).data("id");

        var newDevour = {
            isdevoured: $(this).data("devoured")
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevour
        }).then(function(){
            console.log("Devoured!");
            location.reload();
        });
    });













})