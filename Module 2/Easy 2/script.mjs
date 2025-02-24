/*
E2: Recept Generator

Maak een systeem dat receptkaarten genereert met template literals.

Vereisten:

    Gebruik template literals voor het genereren van de receptkaart
    Converteer de ingrediënten textarea naar een array (split op nieuwe regel)
    Toon alle ingrediënten in een mooie lijst
    De gegenereerde kaart moet er ongeveer zo uitzien:


🥘 Pasta Carbonara
⏱️ Bereidingstijd: 20 minuten

Ingrediënten:
- Pasta
- Spek
- Ei
- Parmezaan
*/

'use strict';
const prepTime = document.getElementById('prepTime');
const recipeName = document.getElementById('recipeName');
const ingredients = document.getElementById('ingredients');
const generateCard = document.getElementById('generateCard');
const result = document.getElementById('result');

generateCard.addEventListener('click', function(){
    
    let p = document.createElement('p');
    p.textContent = `
    ${recipeName.value}
    Bereidingstijd: ${prepTime.value} minuten
    Ingrediënten:
    - ${ingredients.value}
    `;
    result.appendChild(p);
}); 