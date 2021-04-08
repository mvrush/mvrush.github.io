apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=40.371551&lon=-111.74043&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    
    document.getElementById('currconditions').innerHTML=weatherInfo.current.weather[0].description + " " + Math.round(weatherInfo.current.temp); // use concatenation for multiple values
    document.getElementById('humidity').innerHTML=Math.round(weatherInfo.current.humidity);
    document.getElementById('speed').innerHTML=Math.round(weatherInfo.current.wind_speed);
    document.getElementById('feels_like').innerHTML=Math.round(weatherInfo.current.feels_like);

 }); 


 const myweekday = new Array(7);
 myweekday[0] = "Sunday";
 myweekday[1] = "Monday";
 myweekday[2] = "Tuesday";
 myweekday[3] = "Wednesday";
 myweekday[4] = "Thursday";
 myweekday[5] = "Friday";
 myweekday[6] = "Saturday";
  
 const apiforecastURL = "//api.openweathermap.org/data/2.5/onecall?lat=40.371551&lon=-111.74043&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";
 fetch(apiforecastURL)
   .then((response) => response.json())
   .then((weatherInfo) => {
 
     const forecastlist = weatherInfo.daily;
 
 
 const d = new Date();
 const todayDayNumber = d.getDay() 
 let forecastDayNumber = todayDayNumber;
 for (i=1; i<4; i++) { 
   forecastDayNumber +=1;
   if (forecastDayNumber === 7) {
    forecastDayNumber = 0;
  }

  

   let theDayName = document.createElement("h4");
   theDayName.textContent = myweekday[forecastDayNumber];
 
   let theTemp = document.createElement("p");
   theTemp.textContent = "Temp " + Math.round(weatherInfo.daily[i].temp.max) + "\xB0";
 
 
   let theDay = document.createElement("div");
   theDay.appendChild(theDayName);
   theDay.appendChild(theTemp);
   
 
   document.getElementById('forecastDays').appendChild(theDay);
 
 
    
 }
 
 });

 const requestURL = "json/business.json";

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    .then (function (jsonObject) {
      const towns = jsonObject["directory"];
      const event = document.querySelector(".events");

      const townfilter = towns.filter((town) => town.name == "Pleasant Grove");
      townfilter.forEach((town) => {
        let title = document.createElement("h2");
        let eventadd = document.createElement("div");

        title.innerHTML = town.name + ` Events`;

        let myevents = town.events;
        for (i = 0; i < myevents.length; i++) {
          let activity = document.createElement("li");
          activity.innerHTML = `${town.events[i]}`
          eventadd.append(activity);
        };
        event.append(title);
        event.append(eventadd);
      });
    });

    

               fetch(apiURL)
               .then((response) => response.json())
               .then((weatherInfo) => {
                         
        if (weatherInfo.alerts == undefined){
          document.getElementById("close").classList.add("disabled");
        } else {
          document.getElementById('weatheralert').textContent = weatherInfo.alerts[0].description;
          document.getElementById("alerttitle").textContent = weatherInfo.alerts[0].event;
        }
        
    });

document.getElementById("actionButton").onclick = function callToaction() {
  location.href = "join.html";
}