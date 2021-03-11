//This is the Current Weather Conditions Code
//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('currconditions').innerHTML=weatherInfo.weather[0].description + " " + Math.round(weatherInfo.main.temp); // use concatenation for multiple values
    document.getElementById('hightemp').innerHTML=Math.round(weatherInfo.main.temp_max);
    document.getElementById('lowtemp').innerHTML=Math.round(weatherInfo.main.temp_min);
    document.getElementById('speed').innerHTML=Math.round(weatherInfo.wind.speed);
    document.getElementById('chill').innerHTML=Math.round(weatherInfo.main.feels_like);

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function
