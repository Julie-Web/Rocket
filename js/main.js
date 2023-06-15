'use strict';

// Récupére
let boutonAarret = document.getElementById('firing-button');
let rocket = document.getElementById('rocket');
let compteArebours = document.querySelector('#billboard span');

// Variables
let delay = 5;
let compteAreboursInterval;

function ButtonOff() {
    // Insère l'image
    rocket.src = "images/rocket2.gif";
    
    // Délai
    setTimeout(Decoller, delay * 1000);

    // Ajoute classe
    boutonAarret.classList.add('disabled');
    // Ecoute d'événement, au clic, supprime
    boutonAarret.removeEventListener('click', ButtonOff);
    
    // Affiche délai
    compteArebours.textContent = delay;
    
    // Délai
    compteAreboursInterval = setInterval(Decrementation, 1000);
    
}

function Decoller() {
    // Insère l'image
    rocket.src = "images/rocket3.gif";
    // Ajoute classe
    rocket.classList.add('tookOff');
}

function Decrementation() {
    
    // Si
    if(compteArebours.textContent > 0){
        compteArebours.textContent -= 1; 
    // Si non
    }else {
        // Arrête l'interval 
        clearInterval(compteAreboursInterval);
    }
    
}

// Code principale
boutonAarret.addEventListener('click', ButtonOff);