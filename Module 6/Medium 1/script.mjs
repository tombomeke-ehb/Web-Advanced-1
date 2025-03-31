/*

    Maak een JavaScript bestand (script.js) dat fetch-verzoeken uitvoert naar "https://httpstat.us/{code}" wanneer een gebruiker op een endpoint-knop klikt
    Vervang {code} door de waarde van het data-code attribuut van de aangeklikte knop
    Toon in het status-info element de volgende gegevens:
        Statuscode en tekst (bijv. "200 OK")
        Of de aanvraag succesvol was (response.ok)
        De categoriegroep van de statuscode (200s, 300s, 400s, 500s) en markeer met de juiste klasse
    Toon in het response-details element de volgende gegevens:
        Alle response headers (gebruik response.headers)
        Response type
        Toon deze informatie geformatteerd
    Zorg voor goede foutafhandeling als het netwerk faalt
*/

document.addEventListener('DOMContentLoaded', () => {


    endpointKnoppen.forEach(knop => {
        knop.addEventListener('click', async () => {
            const statusCode = knop.dataset.code;

            statusInfoDiv.innerHTML = 'Bezig met ophalen...';
            responseDetailsDiv.textContent ='';

            try {
                const response = await fetch(`https://httpstat.us/${statusCode}`);

                const statusClass = getStatusClass(response.status);
                const statusGroupName = getStatusGroupName(response.status);

                statusInfoDiv.innerHTML = `
                <p class=${statusClass}>
                    <strong>Status:</strong> ${response.status} ${response.statusText}<br>
                    <strong>OK?</strong> ${response.ok ? 'Ja' : 'Nee'}<br>
                    <strong>Categorie:</strong> ${statusGroupName} (${Math.floor(response.status / 100)}xx)
                </p>
                `;

                responseDetailsDiv.textContent = `// Headers
${formatHeaders(response.headers)}

// Response Type: ${response.type}
// Response URL: ${response.url}
                `;
            } catch (error) {
                statusInfoDiv.innerHTML = `
                <p class="status-client-error">
                    <strong>Networkfout:</strong> ${error.message}
                </p>
                `;
                responseDetailsDiv.textContent = "Kan geen verbinding maken met de server.";
                console.error('Fetch Error:', error);
            }
        })
    })
})