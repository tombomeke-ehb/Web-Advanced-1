/*
    Maak een JavaScript bestand (script.js) dat gebruikersgegevens ophaalt van "https://jsonplaceholder.typicode.com/users"
    Zet de JSON-response om naar een JavaScript object
    Voor elke gebruiker in de gegevens:
        Maak een nieuwe gebruiker-kaart div
        Toon de naam, e-mailadres en telefoon van de gebruiker
        Voeg deze kaart toe aan de gebruikers-container
    Verwijder de "Gebruikers laden..." tekst wanneer de gegevens geladen zijn
    Toon een foutmelding als het ophalen mislukt
*/

//Oplossing

document.addEventListener('DOMContentLoaded', () => {
    const gebruikersContainer = document.getElementById('gebruikers-container');

function createUserCard(user) {
    const kaart = document.createElement('div');
    kaart.className = 'gebruiker-kaart';

    kaart.innerHTML = `
    <div class="gebruiker-naam">${user.name}</div>
    <div class="gebruiker-email">${user.email}</div>
    <div>Telefoon: ${user.phone}</div>
    `;

    return kaart;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP fout! Status: ${response.status}');
        }
        return response.json();
    })
    .then(users => {
        gebruikersContainer.innerHTML = '';

        console.log(users);

    if (users.length === 0){
        gebruikersContainer.innerHTML = '<p>Geen gebruikers gevonden</p>';
        return;
    }
    users.forEach(user => {
        const userCard = createUserCard(user);
        gebruikersContainer.appendChild(userCard);
    })

    })
    .catch(error => {
        resulTaatDiv.innerHTML = `
        <p class ="error">Er is iets misgegaan bij het ophalen van de tekst : ${error.message}</p>
        <p>Probeer het later opnieuw.</p>
        `;
        console.error('Fetch Error:', error)
    })
});