const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing remove this before submitting assignment
    const towns = jsonObject['towns'];  //stores the results of the converted response into an array
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 5 || i == 6 || i == 1) {
        let card = document.createElement('section'); //card container
        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name;
        card.appendChild(h2);

        //appends town motto
        let motto = document.createElement('p');
        motto.textContent = towns[i].motto;
        card.appendChild(motto);

        //appends year founded
        let founded = document.createElement('p');
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        card.appendChild(founded);

        //appends population
        let population = document.createElement('p');
        population.textContent = "Town Population: " + towns[i].currentPopulation;
        card.appendChild(population);

        //appends Annual Rainfall
        let rainfall = document.createElement('p');
        rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        card.appendChild(rainfall);

        //appends image
        let image = document.createElement('img');
        image.setAttribute('src', "images/home/" + towns[i].photo); //put images in the "images/home" folder and name them the same as in the JSON file
        image.setAttribute('alt', towns[i].name + ' Hometown');
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);

        document.querySelector('div.town-info').appendChild(card);
    }
}
});