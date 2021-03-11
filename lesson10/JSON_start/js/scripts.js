//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5779816&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.name;
    document.getElementById('windSpeed').innerHTML=weatherInfo.name;

 }); //end of "then" fat arrow function



