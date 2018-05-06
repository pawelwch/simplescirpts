// funkcja ktora losuje 6 liczb;
function losowanieLiczb(){

	"use strict";
// zmienna ktora przechowuje liczby;
var liczby = "";
// generowanie liczb;
for(var i = 0; i < 6; i++){
	liczby = liczby + parseInt((Math.random() * 100), 10) + ", ";
}
// wyświetlanie liczb ZA POMOCĄ TEXT CONTENT I INNER TEXT;
// var output = document.getElementById("output");
// if (output.textContent !== undefined) {
// 		output.textContent = liczby;
// 	} else {
// 		output.innerText = liczby;
// 	}


//wyświetlenie liczb ZA POMOCĄ INNER HTML;
var output = document.getElementById("output");
output.innerHTML = liczby;

}
// KONIEC FUNKCJI;

document.addEventListener("DOMContentLoaded", function(event) {
losowanieLiczb();
});

// window.onload = losowanieLiczb;