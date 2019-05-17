$(document).ready(function(){
    var searchTerms = ['cat', 'cow', 'doggo', 'horse']
    console.log("testing...");


    $('#add-button').unbind().click(function(e){
        e.preventDefault();
        createButton($('#search').val().trim());
      });


    var createButton = function(name){
        console.log("creating Button", name);
        var button = $('<button>');
        button.text(name);

        button.click(function(){
            console.log($(this).text());
            gifQuery($(this).text());

        })

        $('#button-container').append(button);

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
            +"&q="+term;

        $.ajax({
            method:"GET",
            url: queryURL,
        }).then(function(result){
            console.log(result);
            var url = result.data[Math.floor(Math.random()*23)].images.fixed_width.url;
            var img = $('<img>');
            img.attr("src", url);
            $('#gifs').append(img);
            
            //do something cool
        })
    }
    createButtonsFromArr(searchTerms);


})