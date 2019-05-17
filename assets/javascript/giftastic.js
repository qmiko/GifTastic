$(document).ready(function(){
    var searchTerms = ['cat', 'cow', 'doggo', 'horse']
    console.log("testing...");

    var createButton = function(name){
        var button = $('<button>');
        button.text(name);

        button.click(function(){
            console.log($(this).text());
        })

        $('.button-container').append(button);

    }

    var createButtonsFromArr = function(arr){
        for(var i = 0; i < arr.length; i++){
            createButton(arr[i]);
        }
    }

    var gifQuery = function(term){
        var apiKey ="6fqQZoEMgJpAr0tn1oUZy6BbOW5Oahc9";
        var queryURL = "http://api.giphy.com/v1/gifs/search?apiKey="
            +apiKey
            +"&Q="+term;

        $.ajax({
            method:"GET",
            url: queryURL,
        }).then(function(result){
            console.log(result);
            //do something cool
        })
    }
    createButtonsFromArr(searchTerms);


})