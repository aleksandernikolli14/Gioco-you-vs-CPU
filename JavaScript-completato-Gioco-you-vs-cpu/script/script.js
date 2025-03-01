/*
quando clicco sul bottone"GIOCA" la prima cosa che deve succedere è che il browser deve estrarre due numeri casuali.
Dopodichè questi numeri andrò ad iniettarli negli appositi tag <section>.
Successivamente implemento un controllo su questi numeri ed in base ai loro valori stabilisco l'esito della partita.

STEP 1: Gestire il click sul button;
STEP 2: Estrarre i numeri casuali;
STEP 3: Confrontare questi numeri casuali ed iniettarli nei rispettivi tag
STEP 4: In base ai valori estratti, gestire il messaggio riguardante l'esito ed il punteggio;

STEP 5: (Extra): Il primo che arriva a 10 con il punteggio, vince la partita e quindi devo bloccare il bottone (non sarà più cliccabile)
*/

let pulsante=document.querySelector("button");
let palla1=document.querySelector("#first-ball");
let palla2=document.querySelector("#second-ball");
let risultato=document.querySelector("h1");
let myPoints=document.querySelector("#puntiY"); //primo tag aside
let cpuPonits=document.querySelector("#puntiC"); //secondo tag aside

//STEP 1:
pulsante.onclick=function(){

    //STEP 2:
    let random1=Math.floor(Math.random()*15)+1 //YOU
    let random2=Math.floor(Math.random()*15)+1 //CPU
    console.log(random1, random2);

    //STEP 3:
    palla1.innerHTML=random1;
    palla2.innerHTML=random2;

    palla1.style.fontSize="80px";
    palla2.style.fontSize="80px";

    //STEP 4
    if(random1 > random2){
        risultato.innerHTML="Hai Vinto!"
        myPoints.innerHTML++
    }

    else if(random1<random2){
        risultato.innerHTML="Hai Perso"
        cpuPonits.innerHTML++
    }

    else{
        risultato.innerHTML="Patta"
    }

    // Questo è lo step 5
    if(myPoints.innerHTML>=10){
        pulsante.disabled=true;
        risultato.innerHTML="Hai vinto la partita! Ricarica la pagina per iniziarne un'altra"
        risultato.style.color="yellow";
    }

    if(cpuPonits.innerHTML>=10){
        pulsante.disabled=true;
        risultato.innerHTML="GAME OVER... Ricarica la pagina per iniziare un altra partita"
        risultato.style.color="blue";
    }
}