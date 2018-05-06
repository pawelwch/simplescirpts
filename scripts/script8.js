function process(){

    "use strcit";
//pobieramy referencje do elementów;
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var output = document.getElementById("output");

// dane odnośnie wyświetlenia wiadomości;
    var wiadomosc = "";
//interwal jest to ilość dni między jedną a drugą datą
    var interwal = "";

    var dzien = 1000 * 60 * 60 * 24;
//tworzymy dwa nowe obiekty Date;
    var startDate = new Date(start.value);
    var endDate = new Date(end.value);
//sprawdzamy czy obiekty są poprawne;
            if(startDate.getTime() && endDate.getTime()){
//upewniamy się że data początku jest mniejsza;
                    if(startDate < endDate){
 //określamy różnicę dat;                       
                            var roznica = endDate - startDate;
//przetwarzamy różnicę;
                            if(roznica <= dzien){
                                interwal  = "1 dzień";
                            }
                            else{
                                interwal = Math.round(roznica/dzien) + "dni";
                            }
// Budujemy komunikat zwortny;
                            var wiadomosc = "Zdarzenie zostało zaplanowane. Rozpoczyna się " + startDate.toLocaleDateString();
                            wiadomosc += ", a kończy " + endDate.toLocaleDateString();
                            wiadomosc += ", co oznacza " + interwal + ".";
                        }
                    else{
                        wiadomosc = "Data początku nie może być większa od daty zakończenia!!!";
                    }
                }
            else{
                wiadomosc = "Proszę wprowadzić poprawną datę w formacie RRRR/MM/DD.";
            }

//Uaktualniamy akapit;
        if(output.textContent !== undefined){
            output.textContent = wiadomosc;
        }
        else{
            output.innerText = wiadomosc;
        }
//zwracamy false aby nie wysłać formularza;
return false;

}

document.querySelector("#submit").onclick = function(event){
	process();
	event.preventDefault();
}

