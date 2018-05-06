// funkcja służąca do aktualizacji tekstu elementu strony HTML;
function setText(elementId, wiadomosc){
	"use strict";
	// sprawdzamy czy obie wartosci sa stringami;
	if((typeof elementId == "string")
	&& (typeof wiadomosc == "string")){
		//pobieramy referencje do akapitu
		var output = document.getElementById(elementId);
		// uaktualniamy właściwosci textContent lub innerHTML;
		if(output.textContent !== undefined){
	        output.textContent = wiadomosc;
	    }
	    else{
	        output.innerText = wiadomosc;
	    }
	}
	// KONIEC IFAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}
// KONIEC FUNKCJIIIIIIIIIIIIIIIIIIII

// funkcja inicjalizująca;
function pokazCzas(){

    "use strict"
    var data = new Date();

    var wiadomosc = "Dzisiaj mamy " + data.toLocaleDateString();
    wiadomosc += " i jest godzina " + data.getHours() + ":" + data.getMinutes();
    // wywołanie funkcji z dwoma argumentami;
    setText("output", wiadomosc);
}

 document.addEventListener("DOMContentLoaded", function(event){
 	pokazCzas();
 	console.log("jest ok");
 });