function licz(){

    "use strict";

    var cost; //zmienna przechowująca całkowty koszt członkostwa;

    var type = document.getElementById("type"); // tworzymy referencje(odniesienie) do pierwszych dwoch pól formularza;
    var years = document.getElementById("years"); // tworzymy referencje(odniesienie) do pierwszych dwoch pól formularza;

        if (years && years.value){ //warunek który sprawdza czy udało się(nie jest 0) pobrać referencje z pola "years" oraz czy wartość value jest rózna od fałszu;
            years = parseInt(years.value, 10); // konwersja na liczbe całkowitą (dodatkowe zabezpieczenie w przypadku stringa);
        }

        if (type && type.value && years && (years > 0) ){ // WALIDACJA (SPRAWDZENIE) WSZYSTKICH DANYCH WEJŚCIOWYCH;
        
                    //określamy koszt bazowy;
                    switch(type.value){   
                        case "basic":     
                            cost = 10.00; 
                            break;
                        case "premium":
                            cost = 15.00;
                            break;
                        case "gold":
                            cost = 20.00;
                            break;
                        case "platinum":
                            cost = 25.00;
                            break;       
                    }


                    cost = cost * years; // łączny koszt członkostwa to koszt bazowy pomnożony przez liczbę lat; 

                if(years > 1){  //uwzględniamy rabat 20%;
                        cost = cost * .80;
                    }
                    
                    document.getElementById("cost").value = cost.toFixed(2) + "zł"; // wyświetla w polu 'koszt' łaczny koszt członkostwa;
        }    
        else {
                    document.getElementById("cost").value = alert("Proszę wprowadzić poprawne dane"); // poinformuj o błedzie, jezeli dane były nieprawidłowe;
        }

        return false; // zwróć false, aby nie wysłać formularza;
}

// function wykonaj(){ // procedura obsługi zdarzenia;
//     "use strict";

//     document.getElementById("formularz").onsubmit = licz;
// }
// ;
// window.onload = wykonaj

document.querySelector("#submit").onclick = function(event){
    licz();
    event.preventDefault();
}