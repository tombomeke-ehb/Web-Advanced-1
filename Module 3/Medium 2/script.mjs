const verwerktScore = (naam = "Onbekend", score = 0) => {
    const validScore = isGeldigeScore(score) ? Number(score) : 0;
    const validNaam = naam.trim() || "Onbekend";
    
    return {
        naam : validNaam,
        score: validScore,
        datum: new Date().toLocaleString()
    };
}


const voegScoreToe = () => {
    const naam = document.getElementById('playerName').value;
    const score = document.getElementById('score').value;

    const resultaat = verwerktScore(naam, score);

    const scoreBoard = document.getElementById('scoreboard');

    scoreBoard.innerHTML += `
    <div class="score-card">
    <h3>${resultaat.naam}</h3>
    <p>Score: ${resultaat.score}</p>
    <small>${resultaat.datum}</small>
    </div>
    `;

    document.getElementById('playerName').value = '';
    document.getElementById('score').value = '';
}