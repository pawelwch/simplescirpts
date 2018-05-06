var tablicaZadan = [];

// FUNKCJA DODAJĄCA ZADANIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
function dodajZadanie(){


	"use strict"

	var zadanie = document.getElementById('zadanie'); // pobieramy referencje do elementów;
	var output = document.getElementById('output'); // pobieramy referencje do elementów;

	var odpowiedz = "";

// POCZATEK WARUNKUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
	if(zadanie.value){
		tablicaZadan.push(zadanie.value)

		odpowiedz = "Zadania do wykonania: <ol>";

		for(var i = 0, el = tablicaZadan.length; i < el; i++){

			odpowiedz = odpowiedz + "<li>" + tablicaZadan[i] + "</li>";
		}

		odpowiedz = odpowiedz + "</ol>";
		output.innerHTML = odpowiedz;

	}
//KONIEC WARUNKUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
	return false;

}
// KONIEC FUNCKJI DODAJĄCEJ ZADANIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
document.querySelector("#submit").onclick = function(event){
	dodajZadanie();
	event.preventDefault();
}

window.onload = start;