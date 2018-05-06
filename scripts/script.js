//funkcja ta zostanie wykonana po kliknięciu przez użytkownika przycisku wysyłania formularza;
function oblicz(){

	"use strict";

	var total; //zmienna ta bedzie przechowywać cenę końcową;

	//pobieramy referencje do wartosci formularza;
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;
	var tax = document.getElementById("tax").value;
	var discount = document.getElementById("discount").value;

	
	total = quantity * price; //początkowa cena łączna; 
	
	tax = tax / 100; // tutaj następuje zamiana wartosci całkowitej na ułamek(np. 23% --> 0.23%);
	tax = tax + 1; // tutaj zostaje powyższa liczba zinkrementowana o 1 czyli 1.23;
	total = total * tax; // obliczamy poprzez pomnożenie sumy łącznej z wartoscią podatku;

	total = total - discount; // liczymy sumę łączną po odjęciu rabatu;

	total = total.toFixed(2); // metoda '.toFixed()' zwraca wartość z okreśoną z ilością miejsc po przecinku, w tym wypadku - 2;

	document.getElementById("total").value = total; //wyświetlamy cenę łączną w polu formularza


	return false; // zwracamy wartość false aby zapobiec faktycznemu wyłsaniu formularza do serwera(a dokładniej adres wskazany przez atrybut "action" formularza);

	
}//KONIEC FUNKCJI 'oblicz';



document.querySelector("#submit").onclick = function(event){
	oblicz();
	event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function(){
	console.log("Załadowano");	
});