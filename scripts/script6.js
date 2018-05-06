function process(){

    "use strict";
    var wyslano = true; // zmienna  słuzy jakos wskaznik poprawnie wypełnionego formularza

    var email = document.getElementById("email");
    var comment = document.getElementById("comment");

        if(!email || !email.value || (email.value.length < 6) || (email.value.indexOf("@") == -1) ){
            wyslano = false;
            alert("Proszę wprowadzić poprawny adres email.");
        }

        else if(email.value.indexOf("@") <= 1){
            wyslano = false;
            alert("Możesz użyć tylko jednego znaku \'@'");
        }

        if(comment.value.length < 15){
            wyslano = false;
            alert("Komentarz musi składać się z conajmniej 15 znaków!");
        }
         else if(!comment || !comment.value || (comment.value.indexOf("<") != -1) || (comment.value.indexOf(">") != -1) ){
            wyslano = false;
            alert("Proszę wprowadzić treść komentarza bez kodu HTML\( '<', '>', etc.).");
        }
    return wylsano;

}

document.querySelector("#submit").onclick = function(event){
    process();
    event.preventDefault();
}