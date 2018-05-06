function process(){

	"use strict";

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var department = document.getElementById("department").value;

	var output = document.getElementById("output");

	var pracownik = {
		firstName,
		lastName,
		department,
		hireDate: new Date()
	};

	var wiadomosc = "<h2>Dodano nowego pracownika</h2> Imię i naziwsko: " + pracownik.firstName + " " + pracownik.lastName + "<br>";
	wiadomosc += "Dział: " + pracownik.department + "<br>";
	wiadomosc += "Data zatrudnienia: " + pracownik.hireDate.toLocaleDateString();

	output.innerHTML = wiadomosc;

	return false;
}

// function wykonaj(){
// 	"use strict";
// 	document.getElementById('formularz').onsubmit = process;
// }


document.querySelector("#submit").onclick = function(event){
	
	console.log("Kliknięty przycisk");
	event.preventDefault();
	process();
}

document.addEventListener("DOMContentLoaded", function() {
console.log("Załadowane");
});

