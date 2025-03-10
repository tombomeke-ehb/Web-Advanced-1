class Voertuig{
    constructor(merk, model, jaar, verhuurPrijs){
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
        this.id = Voertuig.generateId();
    }

    verhuur(){
        if(!this.beschikbaar){
            return `Dit ${this.merk} ${this.model} is al verhuurd`
        }

        this.beschikbaar = false;
        return `${this.merk} ${this.model} is verhuurd voor €${this.verhuurPrijs} per dag.`
    }

    retourneer(){
        if(this.beschikbaar){
            return `Dit ${this.merk} ${this.model} was niet verhuurd`
        }
    }

    static idCounter = 1;
    static generateId() {
        return Voertuig.idCounter++;
    }
}

class Auto extends Voertuig{
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType){
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
        this.type = "Auto;"
    }

    verhuur(){
        if(!this.beschikbaar){
            return `Deze ${this.merk} ${this.model} is al verhuurd`
        }

        this.beschikbaar = false;

    }
}

class Motor extends Voertuig{
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, type){
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud
        this.motorType = type;
        this.type ="Motor";
    }
}
const vloot = [
    new Auto("Volkswagen", "Golf", 2020, 65, 5, "benzine"),
    new Auto("Toyota", "Corolla", 2021, 70, 5, "hybride")
];

function renderVloot(){
    let html = '<h2>Beschikbare Voertuigen</h2>';
    html += '<table>'
    html += '<tr><th>Type</th><th>Merk</th><th>Model</th><th>Jaar</th><th>Prijs/dag</th><th>Eigenschappen</th>'
}
function huurVoertuig(id){
    const Voertuig = vloot.find( v => v.id === id);
    if(voertuig){
        const bericht = voertuig.verhuur();
        toonBericht(bericht);
        renderVloot();
    }
}

function toonBericht(bericht){
    const messagesElement = document.getElementById('messages');
    const messageElement = document.getElementById
}