/*
E1: Score Calculator

Maak een programma dat studentenscores bijhoudt voor een vak. 

Vereisten:

    Gebruik let voor je scores array
    Gebruik de array methods push voor nieuwe scores
    Update de statistieken elke keer als er een score wordt toegevoegd
    Toon alle scores in de ul lijst
*/
'use strict';
let scores = [];
let totalscore = 0;

let input = document.getElementById('score');
let button = document.getElementById('addScore');
let scoreList = document.getElementById('scoreList');
let average = document.getElementById('average');
let highest = document.getElementById('highest');

button.addEventListener('click', function() {
    if(input.value !== ''){
        scores.push(input.value);
        console.log(scores);
        totalscore += Number(input.value);

        let li = document.createElement('li');
        li.textContent = input.value
        scoreList.appendChild(li);
        input.value = '';
    }
        let averageScore = totalscore / scores.length;
        average.textContent = averageScore;

        let highestScore = 0;
        for(let i = 0; i < scores.length; i++){
            if(Number(scores[i]) > highestScore){
                highestScore = Number(scores[i]);
            }
        }
        highest.textContent = highestScore;
})
