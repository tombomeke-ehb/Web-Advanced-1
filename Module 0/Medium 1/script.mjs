/*M1: Strict Rekenmachine"

Maak een simpele rekenmachine die twee getallen optelt. Je hebt nodig:

    Twee input velden voor de getallen
    Een knop met "Bereken"
    Een plek waar het resultaat komt

Het speciale: gebruik 'use strict' en zorg dat je code controleert of er wel echt getallen worden ingevoerd.
*/
'use strict';
let getal1 = document.getElementById('getal1');
let getal2 = document.getElementById('getal2');
let button = document.getElementById('bereken');
let resultaat = document.getElementById('resultaat');

button.addEventListener('click', function (){
    let nr1 = Number(getal1.value);
    let nr2 = Number(getal2.value);

if(isNaN(nr1) || isNaN(nr2)){
    resultaat.textContent =("Voer een geldig nummer in");
    return;
}

    let som = nr1 + nr2;
    resultaat.textContent = (som);
})