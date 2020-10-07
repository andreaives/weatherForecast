//global variable of searchedCity;

// array of searched cities 
var searchedCity = "";
var cityArr = [];

// creating a button for the cities that are searched for
function createButton(searchedCity) {
 var cityButton = $("<button>").text(searchedCity);
 $("#city-buttons").append(cityButton);
 //i need to add click listener function for the search button
 //this will trigger my text value to be stored in a variable
 //
 $("#search-button").on("click", function (e) {
  e.preventDefault();
  searchedCity = $("#search-value").val();
  cityArr.unshift(searchedCity);
  citySearch();
  createButton(searchedCity);
  
 })
 //ask tyler why this wont console log or create button
}


//creating funtion to call city info
function citySearch() {
 searchedCity = $("#search-value").val();
 var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=483b31400bcaf50500277fbb33164efa";
  
  $.ajax({
   url: queryURL,
   method: "GET",

   //saving to local storage
   success: function(){
    localStorage.setItem("history", JSON.stringify(cityArr))
   }
   //

  })
 }
// $("ul").on("click", "li", function(e){
//  e.preventDefault();
//  $(this).addClass("showCity")

// })

// search weather function
//.then will add them on page for todays forecast
// will be called for this city and another city when typed


//create button function 
//take in the name of the city  passing in the value of the text box
// searchedCityButton.on("click", function(e){
//  var cityInputLi = $("<li>");
//  cityInputLi.text(searchedCityInput);

//  $("ul").append(cityInputLi)
// })
//forecast function (just like get weather) 

//uv search function: will take in latitude and longitude -- its a different url 
// passing in latitude and longitude that we got from the api call 

//things that can trip me up
// getting the url is hard tyler is slacking it 
//refence 06-13 

//https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=483b31400bcaf50500277fbb33164efa
//add api key
//put city in template literal 



//uv api call
//https://api.openweathermap.org/data/2.5/uvi?appid=(api key goes here)&lat=${lat}&lon=${lon}

//source code for image 
//https://openweathermap.org/img/wn/${weatherIcon}@2x.png 
// template literal comes from the original api call

//response.data[0]