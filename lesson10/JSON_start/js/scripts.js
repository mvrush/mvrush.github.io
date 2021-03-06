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
 // first we build a new array for every day of the week
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

console.log(myweekday[3]);

const apiforecastURL = "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";
fetch(apiforecastURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    console.log(weatherInfo.city.name);
    console.log(weatherInfo.list);

    const forecastlist = weatherInfo.list;

    //place it in the html document
    document.getElementById('townName').innerHTML=weatherInfo.city.name;

const d = new Date(); //this gets the current date
console.log(d);
const todayDayNumber = d.getDay() //this gets only the day of the week. Sunday = 0 because it's a zero indexed array
let forecastDayNumber = todayDayNumber;
console.log(forecastDayNumber);
// now we loop through the JSON array and pull out the forecast at noon which is 12:00:00+6:00:00=18:00:00 for noon in Preston in relation to Greenwich
for (i=0; i<forecastlist.length; i++) {
  var time = forecastlist[i].dt_txt;
  if (time.includes('18:00:00')) {
    forecastDayNumber += 1;
  if (forecastDayNumber === 7) {
    forecastDayNumber = 0;
  }
  let theDayName = document.createElement("span");
  theDayName.textContent = myweekday[forecastDayNumber];
  console.log(">"+myweekday[forecastDayNumber]);

  let theTemp = document.createElement("p");
  theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

  let iconcode = weatherInfo.list[i].weather[0].icon;
  let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
  let theIcon = document.createElement("img");
  theIcon.src = iconPath;
  theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

  let theDay = document.createElement("div");
  theDay.appendChild(theDayName);
  theDay.appendChild(theTemp);
  theDay.appendChild(theIcon);
  

  document.getElementById('forecastDays').appendChild(theDay);


  } //end if
} //end for

});

