$(document).ready(function(){

if (typeof localStorage.getItem("localweather") == 'undefined' || localStorage.getItem("localweather") == null){
  // Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: 'amsterdam',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+' '+weather.region+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

if (typeof localStorage.getItem("localweather") !== 'undefined' && localStorage.getItem("localweather") !== null){

// Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: localStorage.getItem("localweather"),
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+' '+weather.region+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}


$("#txtLocation").change(function(){
var location = $('#txtLocation').val();
localStorage.localweather = location;

if (typeof localStorage.getItem("localweather") !== 'undefined' && localStorage.getItem("localweather") !== null){
// Docs at http://simpleweatherjs.com
  $.simpleWeather({
    location: localStorage.getItem("localweather"),
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+' '+weather.region+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
});

$("#txtLocation").val(localStorage.localweather);

});