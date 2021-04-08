const requestURL = 'json/business.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const directory = jsonObject['directory']; 
    for (let i = 0; i < directory.length; i++ ) {
        if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7) {
        let card = document.createElement('section'); 

       
        let div1 = document.createElement('div');
        div1.setAttribute("class", "directory-title"); 
        card.appendChild(div1);
        
        
        let h2 = document.createElement('h2');
        h2.textContent = directory[i].name;
        div1.appendChild(h2);

        
        let motto = document.createElement('h3');
        motto.textContent = directory[i].motto;
        div1.appendChild(motto);

        
        let div2 = document.createElement('div');
        div2.setAttribute("class", "directory-data");
        card.appendChild(div2);

        
        let phone = document.createElement('p');
        phone.textContent = "Phone: " + directory[i].phone;
        div2.appendChild(phone);

       
        let address = document.createElement('p');
        address.textContent = "Address: " + directory[i].address;
        div2.appendChild(address);

        
        let website = document.createElement('p');
        website.innerHTML = "Visit our " + "<a href='" + directory[i].website + "'>Website</a>";
        div2.appendChild(website);

        
        let image = document.createElement('img');
        image.setAttribute('src', "images/home/" + directory[i].photo); //put images in the "images/home" folder and name them the same as in the JSON file
        image.setAttribute('alt', directory[i].name + ' Hometown');
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);


        document.querySelector('div.directory-info').appendChild(card);


    }
}
});