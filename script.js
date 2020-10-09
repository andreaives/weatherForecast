//global variable of searchedCity;

// array of searched cities 
$(document).ready(function () {
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

    //calling the functions
    //placing the searched cit first in the cityArr
    cityArr.unshift(searchedCity);
    todaysForecast(searchedCity);
    weekForecast(searchedCity)
    createButton(searchedCity);

  })




  //creating funtion to call city info
  function todaysForecast(city) {

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=483b31400bcaf50500277fbb33164efa";

    $.ajax({
      url: queryURL,
      method: "GET",

      //saving to local storage
    }).then(function (response) {
      localStorage.setItem("history", JSON.stringify(cityArr));
      console.log(response);
      getUvInd(response.coord.lat, response.coord.lon);
      //get info for fist day
      var name = (response.name);
      console.log("name")
      $(".city-name").text(name)
      //storing api data in variables
      var temp = (response.main.temp);
      var tempF = parseInt((temp - 273.15) * 1.80 + 32);
      var humidity = (response.main.humidity)
      var wind = (response.wind.speed)
      //placing my data in my html with jquery .text()
      $(".temp").text("Temperature: " + tempF)
      $(".humidity").text("The humidity is: " + humidity)
      $(".wind").text("Wind Speed: " + wind)

      // var icon = (response.weather[0].icon)

      // //not sure why Icon is not working
      // var img = $("<img />", {

      //   src: "https://openweathermap.org/img/2.5/forecast?lat=" + icon + "2x.png",
      //   alt: "icon indicating weather for the day"
      // });
      // //appending the image to the page
      // img.appendTo($(".icon"));


    });

  }
  //grabbing the api info for the city
  function weekForecast(city) {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=483b31400bcaf50500277fbb33164efa&units=imperial",
      method: "GET",
    }).then(function (response) {
      console.log(response)

      //time to start on the 5 day forecast
      //going to try to make a loop with an array of the lists I need...
      // var arrNum = (response.list)
      console.log(response.list[6])
      var dtTxt1 = (response.list[6].dt_txt)
      //grabbing the month-dat by selecting the text 5-10
      var date1 = dtTxt1.slice(5, 10);
      $("#day1").append("Date " + date1)
      //getting temp 
      var tempK1 = (response.list[6].main.temp)
      $("<div>").addClass("temp1").text("Temp: " + tempK1 + "F").appendTo($("#day1"))
      var humid1 = (response.list[6].main.humidity)
      $("<div>").addClass("humid1").text("Humidity: " + humid1 + "%").appendTo($("#day1"))
      // var icon1 = (response.list[6].weather[0].icon);
      // var img1 = $("<img />"), {
    //   id: "weatherImage"
    //   src: "https://openweathermap.org/img/2.5/forecast?lat=" + icon1 + "2x.png",
    //   alt: "icon indicating weather for the day"'})
    // });
    // //appending the image to the page
    // img.appendTo($("#day1"));





    ///loop through array and append to card 
    //add id to text with numbers that matched the looped index number
    //var threeDayForward = new moment().add(3, 'day'); (5 of these that add 3 days)

  })
}
//inserting lat+lon to get the city UV information
function getUvInd(lat, lon) {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/uvi?appid=483b31400bcaf50500277fbb33164efa&lat=" + lat + "&lon=" + lon,
    method: "GET",
    success: function (response) {
      //response.value
      // console.log(response)
    }
  })
}
})

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


//https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=483b31400bcaf50500277fbb33164efa
//add api key
//put city in template literal 



//uv api call
//https://api.openweathermap.org/data/2.5/uvi?appid=(api key goes here)&lat=${lat}&lon=${lon}

//source code for image 
//https://openweathermap.org/img/wn/${weatherIcon}@2x.png 
// template literal comes from the original api call

//response.data[0]