/*
M1: Element Collector

Schrijf code die:

    Alle elementen met class "special" vindt en hun tekst rood maakt
    De tweede paragraaf vindt en onderstreept
    Het aantal gevonden "special" elementen toont in het output div
    Gebruik verschillende selector methodes (getElementById, querySelector, etc.)
*/
'use strict';
let special = document.getElementsByClassName('special');
let p2 = document.querySelectorAll('p');
let div = document.getElementById('output');
let aantalSpecial = special.length;
p2[1].style.textDecoration = 'underline';
for(let i = 0; special.length > i; i++){
    special[i].style.color = ('red');
}
div.textContent = aantalSpecial;