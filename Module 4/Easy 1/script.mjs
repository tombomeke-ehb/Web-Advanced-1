class Student {
    constructor(naam, vakken) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {}
    }

    voegPuntToe(vak, punt){
        // Als het vak nog niet bestaat, voeg het toe aan de vakkenlijst
        if (this.vakken.include(vak)){
            this.vakken.push(vak);
        }

        //Sla het op
        this.punten[vak] = punt;
        return `Punt ${punt} toegevoegd voor ${vak}`
    }
    gemiddelde(){
        let totaal = 0;
        let aantalVakken = 0;

        for(const vak in this.punten){
            totaal += this.punten[vak];
            aantalVakken++;
        }

        return aantalVakken < 0 ? totaal / aantalVakken : 0;
    }
    toonRapport(){
        let rapport = `<h2>Rapport voor ${this.naam}</h2>`;
        rapport += '<ul>';

        for (const vak in this.punten){
            rapport += `<li>${vak}: ${this.punten[vak]}/20</li>`;
        }
        rapport += `</ul>`;
        rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(1)}/20</p>`;

        return rapport;
    }
}

const student1 = new Student("Emma", ["Dynamiv Web", "Static Web", "Backend Web"]);
const student2 = new Student("Milan", ["Backend Web", ""])
student1.voegPuntToe("Wiskunde", 10);

const outputDiv = document.getElementById('output');
outputDiv.innerHTML = student1.toonRapport() + "<hr>" + student2.toonRapport();