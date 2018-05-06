function limitTekstu(){

    "use strict";

    var tekstSkrocony; //przechowuje tekst po skróceniu;

    var tekstOryginalny = document.getElementById("komentarz").value; //pobieramy i przypisujemy zawartośc z pola "Komentarz" jako tekst oryginalny;
    var ostatniaSpacja = tekstOryginalny.lastIndexOf(" ", 100); // metoda ".lastIndexOf(" ",150)" - określa pozycje ostatniej spacji przed 100-nym znakiem;

    tekstSkrocony = tekstOryginalny.slice(0, ostatniaSpacja); // przycinamy teksty do 'ostatniej spacji';

    document.getElementById("liczbaZnakow").value = tekstOryginalny.length; // wyświetlamy użytkownikowi liczbę znaków przed skróceniem;
    
    document.getElementById("wynik").value = tekstSkrocony; // wyświetlenie tekstu skróconego;

    return false; // zwracamy false;
}

document.querySelector("#submit").onclick = function(event){
	limitTekstu();
	event.preventDefault();
}