const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c0fc88d8632588356324367e7fd1e57a&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description; //notice how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc; //informational specifications only
document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});