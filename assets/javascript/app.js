$(document).ready(function() {
//Array for searched topics to be added
var topics = [];

	//Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
  //Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
 	function displayGlobelNetwork() {

	var x = $(this).data("search");
	console.log(x);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=gl69HnBa9Yvzykeawj0niiBPewNcK9zi";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        	for (var i = 0; i < results.length; i++) {
        	
        	var showDiv = $("<div class='col-md-4'>");

        	var rating = results[i].rating;
        	var defaultAnimatedSrc = results[i].images.fixed_height.url;
        	var staticSrc = results[i].images.fixed_height_still.url;
        	var networkImage = $("<img>");
        	var p = $("<p>").text("Rating: " + rating);

        	networkImage.attr("src", staticSrc);
        	networkImage.addClass("globelNetwork");
        	networkImage.attr("data-state", "still");
        	networkImage.attr("data-still", staticSrc);
        	networkImage.attr("data-animate", defaultAnimatedSrc);
        	showDiv.append(p);
        	showDiv.append(networkImage);
        	$("#gifArea").prepend(showDiv);

        }
	});
}

  //Submit button click event takes search term from form input, trims and pushes to topics array, displays button
	$("#addShow").on("click", function(event) {
        event.preventDefault();
        var newShow = $("#globelNetwork").val().trim();
        topics.push(newShow);
        console.log(topics);
        $("#globelNetwork").val('');
        displayButtons();
      });

  //Function iterates through topics array to display button with array values in "myButtons" section of HTML
	function displayButtons() {
    $("#myButtons").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("id", "show");
      a.attr("data-search", topics[i]);
      a.text(topics[i]);
      $("#myButtons").append(a);
    }
  }


  displayButtons();

  //Click event on button with id of "show" executes displayGlobelNetwork function
  $(document).on("click", "#show", displayGlobelNetwork);

  //Click event on gifs with class of "globelNetwork" executes pausePlayGifs function
  $(document).on("click", ".globelNetwork", pausePlayGifs);

  //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
  function pausePlayGifs() {
  	 var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
  }
}

});