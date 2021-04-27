function toggleMenu() {
    document.getElementById("primaryNav1").classList.toggle("hide");
    document.getElementById("primaryNav2").classList.toggle("hide");
}


const save_date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var todayDate = days[save_date.getDay()] + ", " + save_date.getDate() + " " + months[save_date.getMonth()] + " " + save_date.getFullYear()
document.getElementById("updatetime").textContent = todayDate;


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


