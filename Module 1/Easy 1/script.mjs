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
let naam = prompt("Wat is je naam?");
let score = 0;
let q1 = prompt('Wat is de output van `console.log(2 + "2");` in JavaScript?');
if (q1 === "22") {
    alert('Goed gedaan!');
    score++;
} else {
    alert('Het juiste antwoord was: "22"');
}
let q2 = prompt('Welke keyword gebruik je om een constante variabele te declareren in JavaScript?');
if (q2.toLowerCase() === "const") {
    alert('Goed gedaan!');
    score++;
} else {
    alert('Het juiste antwoord was: const');
}
let q3 = prompt('Wat is de juiste manier om een functie te definiëren in JavaScript? (Typ het juiste antwoord)');
if (q3.toLowerCase() === "function myfunction() {}") {
    alert('Goed gedaan!');
    score++;
} else {
    alert('Het juiste antwoord was: function myFunction() {}');
}
alert('Jouw totaalscore is: ' + score);
