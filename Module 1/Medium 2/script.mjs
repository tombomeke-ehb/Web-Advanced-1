/*
M2: Interactive Color Grid

Maak een interactief kleurenraster:

    Een 5x5 grid van divs (gebruik CSS Grid of Flexbox)
    Als je over een cel beweegt (hover) wordt deze rood
    Als je klikt op een cel wordt deze blauw
    Als je dubbelklikt op een cel wordt deze groen
    Rechts van het grid toon je hoeveel cellen van elke kleur er zijn
*/
'use strict';
let grid = document.getElementById('grid');
let redCount = document.getElementById('redCount')
let blueCount = document.getElementById('blueCount')
let greenCount = document.getElementById('greenCount')

for(let i = 0; i < 25; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
}

function updateCounts(){
    const cells = document.getElementsByClassName('cell');
    let red = 0, blue = 0, green = 0;

    Array.from(cells).forEach(cell => {
        if(cell.style.backgroundColor === 'red') red++;
        if(cell.style.backgroundColor === 'blue') blue++;
        if(cell.style.backgroundColor === 'green') green++;
    });

    redCount.textContent = red;
    blueCount.textContent = blue;
    greenCount.textContent = green;
}

grid.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = 'red';
        updateCounts();
    }
})
grid.addEventListener('click', function(e){
    if(e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = 'blue';
        updateCounts();
    }
})
grid.addEventListener('dblclick', function(e){
    if(e.target.classList.contains('cell')) {
        e.target.style.backgroundColor = 'green';
        updateCounts();
    }
})