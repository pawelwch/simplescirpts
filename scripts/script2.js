function licz(){
    "use strict"
    var objetosc;

    var promien = document.getElementById("promien");
    
        if(promien && (promien.value > 0 )){
            
            objetosc = (4/3) * Math.PI * Math.pow(promien.value, 3);
            objetosc = objetosc.toFixed(2);
        }
        else{
            alert("Podaj dodatnią wartość liczbową!");
        }

        document.getElementById("objetosc").value = objetosc;
        
    return false;
}


document.querySelector("#submit").onclick = function(event){
	licz();
	event.preventDefault();
};