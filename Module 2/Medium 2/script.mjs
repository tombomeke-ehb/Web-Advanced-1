/*

M2: Overzicht studenten resultaten

Maak een dashboard waar je studentenresultaten kunt bekijken en toevoegen.

Vereisten:

    Gebruik objecten voor het opslaan van student data
    Gebruik for...of loops voor het tonen van resultaten
    Genereer een overzicht met template literals
    Toon per student:
        Alle vakken met scores
        Gemiddelde score
        Hoogste en laagste score
*/
'use strict';

const student = {
    Alex: { grades: []},
    Sam: { grades: []},
    Jo: { grades: []}
};

// Elementen ophalen
const studentSelect = document.getElementById('student');
const courseInput  = document.getElementById('course');
const gradeInput = document.getElementById('grade');
const addButton  = document.getElementById('addGrade');
const overviewDiv =  document.getElementById('studentOverview');

addButton.addEventListener('click', () => {
    const student = studentSelect.value;
    const course = courseInput.value;
    const grade = Number(gradeInput.value);

    if (!course || grade < 0 || grade > 20) {
        alert('Vul alle velden correct in!');
    }

    // Score toevoegen
    students[student].grade.push({
        course: course,
        grade: grade
    });

    // Overview updaten
    updateOverview();

    // Inputs leegmaken
    student = '';
    course = '';
    grade = '';
});


function updateOverview() {
    let overview = '';
}