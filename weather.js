$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather in Chicago is: " + data.currently.summary +
          ". The weather tomorrow will be: " + data.daily.data[0].summary + " " +
          ". The weather 2 days from now will be: " + data.daily.data[1] + " " +
          ". The weather 3 days from now will be: " + data.daily.data[2] + " " +
          ". The weather 4 days from now will be: " + data.daily.data[3] + " " +
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
