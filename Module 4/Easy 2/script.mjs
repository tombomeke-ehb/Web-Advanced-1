class Product{
    constructor(naam, prijs, voorraad){
        this.naam = naam;
        this._prijs = prijs;
        this._voorraad = voorraad;
        //Setters
        this.prijs = prijs;
        this.voorraad = voorraad;
    }

    get prijs(){
        return this._prijs;
    }

    set prijs(value){
        if(value >= 0){
            this._prijs = value;
        }else {
            console.warn(`Negatieve prijs niet toegestaan voor ${this.naam}. Prijs op 0 gezet.`)
            this._prijs = 0;
        }
    }

    get voorraad(){
        return this._voorraad
    }

    set voorraad(value){
        if(value >= 0){
            this._voorraad = value;
        }else {
            console.warn(`Negatieve voorraad niet toegestaan voor ${this.naam}. Voorraad op 0 gezet.`)
            this._voorraad = 0;
        }
    }

    get verkoopprijs(){
        return this.prijs * 1.21;
    }

    get beschikbaar(){
        return this.voorraad > 0;
    }

    toonInfo(){
        return `
        <div class="product-card">
        <h2>${this.naam}</h2>
        <p>Inkoopprijs: <span class="price">€${this.prijs.toFixed(2)}</span>
        <p>Verkoopprijs (incl. BTW): <span class="price">€${this.verkoopprijs.toFixed(2)}</span>
        <p>Voorraad: ${this.voorraad} stuks</p>
        <p>Status: <span>
            ${this.beschikbaar ? 'Op voorraad' : 'Niet op voorraad'}
            </span></p>
        </div>
        `;
    }
}

const product1 = new Product("iPhone SE", 0, 0)
product1.prijs = 450;
product1.voorraad = 50;

let output = document.getElementById("output");

output.innerHTML = Product.toonInfo();