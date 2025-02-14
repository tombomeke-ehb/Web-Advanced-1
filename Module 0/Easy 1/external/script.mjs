'use strict';

let knop = document.getElementById('begroeting');
knop.addEventListener('click', () =>{
    if(knop.textContent === ('Hallo!')){
        knop.textContent = 'Tot ziens!';
    }
    else if(knop.textContent === ('Tot ziens!')){
        knop.textContent = 'Hallo!';
    }
})