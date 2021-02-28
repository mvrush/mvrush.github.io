// Navigation toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide"); 
    /* what this does is toggle the class "hide" on and off in the html */
}

//Today's date display in footer
const save_date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var todayDate = days[save_date.getDay()] + ", " + save_date.getDate() + " " + months[save_date.getMonth()] + " " + save_date.getFullYear()
document.getElementById("updatetime").textContent = todayDate;

// displays the message on saturday only
const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");
if (dayNumber == 5) {
    element.classList.add("showme");
}  else element.classList.add("hideme");

//This script is for the storm rating slider
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}
