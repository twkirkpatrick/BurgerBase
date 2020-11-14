$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newBurger =  {
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
        let id = $(this).data("id");

        let newDevour = {
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

    $("#clear").on("click", function(){
        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(function(){
            console.log("burgers deleted!")
            location.reload();
        })
    })

})