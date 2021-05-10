//hamburger toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

/*---------STICKY NAVBAR------------*/
//When user scrolls the page, execute stickyScroll
window.onscroll = function() {stickyNav()};
//Get the navbar
var navbar = document.getElementById("navbar");
//Get the offest position of the navbar
var sticky = navbar.offsetTop;
//Add the sticky class to the navbar when you reach it's scroll position. Remove "sticky" when you leave scroll position
function stickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}

//Current Date in Footer
const save_date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var todayDate = days[save_date.getDay()] + ", " + save_date.getDate() + " " + months[save_date.getMonth()] + " " + save_date.getFullYear()
document.getElementById("updatetime").textContent = todayDate;


//following code is from weather site
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


    function listView() {
        document.getElementById("directory").classList.add("list-view");
    }

    function gridView() {
        document.getElementById("directory").classList.remove("list-view");
    }


function removeAlert() {          
    document.getElementById("close").classList.add("disabled");
  } 


