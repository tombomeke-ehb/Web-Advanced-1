/*

    Maak een JavaScript bestand (script.mjs) dat weergegevens ophaalt van een publieke weer-API naar keuze (bijvoorbeeld: "https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid=JOUW_API_SLEUTEL")
    Implementeer de volgende functionaliteiten:
        Zoekfunctie: Haal weergegevens op voor de ingevoerde stad
        Temperatuur: Voeg een knop toe om te schakelen tussen Celsius en Fahrenheit
        Foutafhandeling: Toon gebruiksvriendelijke fouten bij mislukte verzoeken
    Toon minimaal de volgende weergegevens:
        Huidige temperatuur
        Weerbeschrijving
        Luchtvochtigheid
        Windsnelheid
        Zonsopgang en zonsondergang (omgezet van UNIX-timestamp naar leesbare tijd)
*/

fetch('https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid=62e54e4813054c6cfb443ff82f9be8cd')

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const weatherDisplay = document.getElementById('weather-display');

    const API_KEY = '62e54e4813054c6cfb443ff82f9be8cd'
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

    let useCelsius = true;

    searchButton.addEventListener('click', zoekWeer);
    
    function zoekWeer() {
        const stad = cityInput.value.trim();
        if(stad) {
            weatherDisplay.innerHTML = '<div class="loading">Weer ophalen...</div>'
            haalWeerOp(stad);
        }
    }

    function haalWeerOp(stad) {
        fetch(`${API_URL}?q=${stad}&units=metric&appid=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Stad niet gevonden of API-fout')
                }
                return response.json();
            })
            .then(data => {
                toonWeerData(data);
            })
            .catch(error => {
                weatherDisplay.innerHTML = `
                <div class="error">
                    <p>Er ging iets mis: ${error.message}</p>
                    <p>Probeer een andere stad of controleer de spelling.</p>
                </div>
                `;
            });
    }
});