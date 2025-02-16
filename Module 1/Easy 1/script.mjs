/*
E1: Mini Quiz

Maak een simpele quiz met alerts en prompts:

    Vraag de gebruiker eerst om hun naam via prompt
    Stel vervolgens 3 vragen over programmeren via prompts
    Voor elk juist antwoord toon je een alert met "Goed gedaan!"
    Voor elk fout antwoord toon je een alert met het juiste antwoord
    Op het einde toon je een alert met de totaalscore

// Voorbeeld start-code
let naam = prompt("Wat is je naam?");
// Stel hier je vragen...
// Hou de score bij...
// Toon het resultaat...
*/
let naam = prompt('Wat is je naam?');
let score = 0;
let q1 = prompt('Test');

if(q1 == "yes" || q1 == "Yes"){
    alert('Goed gedaan!')
    score++;
}