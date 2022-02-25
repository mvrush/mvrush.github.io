const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing remove this before submitting assignment
    const prophets = jsonObject['prophets'];  //stores the results of the converted response into an array
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);

        //appends birthdate
        let birthdate = document.createElement('p');
        birthdate.textContent = "Date of birth: " + prophets[i].birthdate;
        card.appendChild(birthdate);

        //appends place of birth
        let birthplace = document.createElement('p');
        birthplace.textContent = "Place of birth: " + prophets[i].birthplace;
        card.appendChild(birthplace);

        //appends image
        let image = document.createElement('img');
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order)
        card.appendChild(image);

        // document.querySelector('div.cards').appendChild(card); // uses the querySelector() to find the 'div' with the 'cards' class
        document.getElementById("cards").appendChild(card); // This one uses getElementById() to find the 'cards' id.
    }
});