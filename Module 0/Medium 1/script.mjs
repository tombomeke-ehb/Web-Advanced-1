'use strict';
let getal1input = document.getElementById('getal1');
let getal2input = document.getElementById('getal2');
let berekenKnop = document.getElementById('bereken');
let resultaatVeld = document.getElementById('resultaat');

berekenKnop.addEventListener('click', () => {
    let nr1 = Number(getal1input.value);
    let nr2 = Number(getal2input.value);

    if(isNaN(nr1) || isNaN(nr2)){
        resultaatVeld.textContent = 'Voer alsjeblieft geldige getallen in!';
        return;
    }
    let som = nr1 + nr2;
    resultaatVeld.textContent = `${som}`;
});