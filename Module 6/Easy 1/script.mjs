/*

    1. Maak een JavaScript bestand (script.mjs) dat een tekstbestand ophaalt van de URL: "https://jsonplaceholder.typicode.com/posts/1"
    2. Wanneer de gebruiker op de knop "Haal Tekst Op" klikt, moet de fetch-operatie starten
    3. Transformeer de JSON-response naar plaintext door de titel en body uit de response te halen en die netjes te formatteren
    4. Toon de geformatteerde tekst in het resultaat-div
    5. Zorg voor foutafhandeling. Als er iets misgaat, toon dan een vriendelijke foutmelding in het resultaat-div met de klasse 'error'

    */

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resp => resp.json())
.then(showData => {
    console.log(showData.body);
    console.log(showData.title);
})
.catch(fout => console.error('Oeps, er ging iets mis:', fout));

