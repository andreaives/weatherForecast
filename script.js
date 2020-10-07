//global variable of searchedCity;

// array of searched cities 

var cityArr = [];

// creating a button for the cities that are searched for
function createButton(searchedCity) {
 var cityButton = $("<button>").text(searchedCity);
 $("#city-buttons").append(cityButton);
 //i need to add click listener function for the search button
 //this will trigger my text value to be stored in a variable
}//
 $("#search-button").on("click", function (e) {
  e.preventDefault();
  var searchedCity = $("#search-value").val();
  console.log(searchedCity)
  cityArr.unshift(searchedCity);
  citySearch(searchedCity);
  getForecast(searchedCity)
  createButton(searchedCity);
  
 })
 



//creating funtion to call city info
function citySearch(city) {
 
 var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=483b31400bcaf50500277fbb33164efa";
  
  $.ajax({
   url: queryURL,
   method: "GET",

   //saving to local storage
    success: function(response){
    localStorage.setItem("history", JSON.stringify(cityArr))
     console.log(response)
     getUvInd(response.coord.lat, response.coord.lon)
     //this is where the logic goes to set it to the page
   }
  })

 }
 //grabbing the api info for the city
function getForecast(city) {
 $.ajax({
  url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=483b31400bcaf50500277fbb33164efa&units=imperial",
  method: "GET",
  success: function(response){
   ///loop through array and append to card 
   //add id to cards with numbers that matched the looped index number
   //var threeDayForward = new moment().add(3, 'day'); (5 of these that add 3 days)
  }
 })
}
//inserting lat+lon to get the city UV information
function getUvInd (lat, lon){
 $.ajax({
  url: "http://api.openweathermap.org/data/2.5/uvi?appid=483b31400bcaf50500277fbb33164efa&lat=" + lat + "&lon=" + lon,
  method: "GET",
  success: function(response){
   //response.value
   console.log(response)
  }
 })
}
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