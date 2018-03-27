




function GiphyApiCall(searchString) {



    var api_key = 'pU21dqZG3LPqFJ6JgrWTAZ5Pm2gd3KY3';

    // Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?";
    queryURL += "api_key=" + api_key;
    queryURL += "&limit=10&q=" + searchString;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        loadHtml(response);
    });


}


function loadHtml(response) {

    var resData = response.data;

    console.log(resData);

    for (let i = 0; i < resData.length; i++) {

         //create the div that will hold rating and image
        var divCard = $('<div>');
        divCard.addClass("card align-top"); // col-lg-3 col-md-2 col-sm-2");

        //create image , give attrs: src, data-still,data-animate
        var img = $('<img>');
        img.addClass('card-img-top');
        //img.attr('data-still', resData[i].images.fixed_width_still.url);  
        img.attr('data-still', resData[i].images["480w_still"].url); //images["480w_still"].url);
        img.attr('data-animate', resData[i].images.original.url);
        img.attr('data-value', 'still');
        img.attr('src', resData[i].images["480w_still"].url);//resData[i].images.fixed_width_still.url);  //resData[i].images["480w_still"].url); 


        //bootstrap card body - for rating
        var divCardBody = $('<div>');
        divCardBody.addClass('card-body');
        var h3 = $('<h3>');
        h3.addClass('card-title');
        h3.html('Rating: ' + resData[i].rating);
        divCardBody.append(h3);

        //append the 2 created divs
        divCard.append(divCardBody);
        divCard.append(img);

        //prepend to html
        $('.gipheys').prepend(divCard);

    }




};