'use strict'

// Data structuur voor studenten
const students = {
    Alex: { grades: [] },
    Sam: { grades: [] },
    Jo: { grades: [] }
};

// Elementen ophalen
const studentSelect = document.getElementById('student');
const courseInput = document.getElementById('course');
const gradeInput = document.getElementById('grade');
const addButton = document.getElementById('addGrade');
const overviewDiv = document.getElementById('studentOverview');

addButton.addEventListener('click', () => {
    const student = studentSelect.value;
    const course = courseInput.value;
    const grade = Number(gradeInput.value);

    if (!course || !grade || grade < 0 || grade > 20) {
        alert('Vul alle velden correct in!');
        return;
    }

    // Score toevoegen
    students[student].grades.push({
        course: course,
        grade: grade
    });

    // Overview updaten
    updateOverview();
    
    // Inputs leegmaken
    courseInput.value = '';
    gradeInput.value = '';
});

function updateOverview() {
    let overview = '';
    
    for (let studentName of Object.keys(students)) {
        const student = students[studentName];
        const grades = student.grades;
        
        // Gemiddelde berekenen
        let average = 0;
        if (grades.length > 0) {
            average = grades.reduce((sum, grade) => sum + grade.grade, 0) / grades.length;
        }

        // Template maken
        overview += `
            <div class="student-card">
                <h3>${studentName}</h3>
                <div class="grades">
                    ${grades.map(g => `
                        <p>${g.course}: ${g.grade}/20</p>
                    `).join('')}
                </div>
                <p>Gemiddelde: ${average.toFixed(1)}/20</p>
            </div>
        `;
    }

    overviewDiv.innerHTML = overview;
}