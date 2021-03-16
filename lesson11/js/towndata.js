const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing. Shows table in console to find town number.
    const towns = jsonObject['towns'];  //stores the results of the converted response into an array
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 0 || i == 6 || i == 2) {
        let card = document.createElement('section'); //card container

        //create div for title and slogan
        let div1 = document.createElement('div');
        div1.setAttribute("class", "towns-title"); //sets the division class attribute for css styling
        card.appendChild(div1);
        
        //Town Name Header
        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name;
        div1.appendChild(h2);

        //appends town motto
        let motto = document.createElement('h3');
        motto.textContent = towns[i].motto;
        div1.appendChild(motto);

        //create div for p
        let div2 = document.createElement('div');
        div2.setAttribute("class", "towns-data"); //sets the division class attribute for css styling
        card.appendChild(div2);

        //appends year founded
        let founded = document.createElement('p');
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        div2.appendChild(founded);

        //appends population
        let population = document.createElement('p');
        population.textContent = "Town Population: " + towns[i].currentPopulation;
        div2.appendChild(population);

        //appends Annual Rainfall
        let rainfall = document.createElement('p');
        rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        div2.appendChild(rainfall);

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