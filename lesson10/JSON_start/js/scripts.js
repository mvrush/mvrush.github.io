//This is the Current Weather Conditions Code
//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=84062,us&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function

 //This is the 5-Day Forecast Code

const mydate = new Date(); //this gets the current date
console.log(mydate);
const y = mydate.getDay(); //this gets only the day of the week. Sunday = 0 because it's a zero indexed array
console.log(y);
// now we build a new array for every day of the week

