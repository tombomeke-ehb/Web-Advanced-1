/*
Maak een functie 'maakBestelling' met parameters 'drank' en 'snack'

Gebruik default waardes: bv. drank: "cola" en snack: "chips"

Return een object met deze waardes

    Bestelling 1: Geen parameters
    Bestelling 2: Alleen "fanta" als drank
    Bestelling 3: "sprite" als drank en "nootjes" als snack

Bonus: Voeg een timestamp toe aan elke bestelling!
*/

const maakBestelling = (drank = 'cola', snack = 'chips') => {
    return {
        drank: drank,
        snack: snack,
        tijd: new Date().toLocaleTimeString()
    };
};
const output = document.getElementById('bestelling')

// Bestellingen maken:
const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling("fanta");
const bestelling3 = maakBestelling("sprite", "nootjes");

output.innerHTML += `
<div class="bestelling">Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack} (${bestelling1.tijd})</div>
<div class="bestelling">Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack} (${bestelling2.tijd})</div>
<div class="bestelling">Bestelling 3: ${bestelling3.drank} en ${bestelling3.snack} (${bestelling3.tijd})</div>
`;