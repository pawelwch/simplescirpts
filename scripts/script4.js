function formatowanie(){

    "use strict";

    var sformatowanaNazwa; // przechowuje wynik czyli w tym wypadku imie + nazwisko;

    var imie = document.getElementById("imie").value; // pobieramy wartosci z ID='imie' i przechowujemy w zmiennej 'imie';
    var nazwisko = document.getElementById("nazwisko").value; // pobieramy wartosci z ID='nazwisko' i przechowujemy w zmiennej 'nazwisko';

    sformatowanaNazwa = imie + " " + nazwisko; // przypisujemy wartości wczesniej zadeklarowanej zmiennej;

    document.getElementById("wynik").value = sformatowanaNazwa; // wyświetlamy sformatowaną nazwę;
    
    return false; // zwracamy false

}


document.querySelector("#submit").onclick = function(event){
	formatowanie();
	event.preventDefault();
};
