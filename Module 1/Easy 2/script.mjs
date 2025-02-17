/*

E2: Loading Message

Schrijf code die:

    Een div toont met "Loading..." wanneer de pagina begint te laden
    Deze tekst verandert in "Welcome!" wanneer alles geladen is
    Na nog eens 2 seconden de tekst verbergt
*/
'use strict';
let loadinMessage = document.getElementById('loadingMessage');

window.addEventListener('load', function(){
    loadinMessage.textContent = 'Welcome';

    setTimeout(function(){
        loadinMessage.style.display = 'none';
    }, 2000)
})