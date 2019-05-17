$(document).ready(function(){
    var searchTerms = ['cat', 'cow', 'doggo', 'horse']
    console.log("testing...");

    var createButton = function(name){
        var button = $('<button>');
        button.text(name);
        $('.button-container').append(button);
    }

    var createButtonsFromArr = function(arr){
        for(var i = 0; i < arr.length; i++){
            createButton(arr[i]);
        }
    }

    createButtonsFromArr(searchTerms);
    

})