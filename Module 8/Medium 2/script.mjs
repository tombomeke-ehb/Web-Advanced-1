// Selecteer de benodigde DOM elementen
const container = document.getElementById('container');
const dashboard = document.getElementById('dashboard');
const currentWidthDisplay = document.getElementById('current-width');
const columnCountDisplay = document.getElementById('column-count');

// Functie om het aantal kolommen te bepalen op basis van containerbreedte
const updateColumns = (width) => {
    let columns;

    // Bepaal aantal kolommen op basis van breedte
    if (width < 600) {
        columns = 1;
    } else if (width < 900) {
        columns = 2;
    } else {
        columns = 3;
    }

    // Update de data-columns attribuut op het dashboard
    dashboard.dataset.columns = columns;

    // Update de info display
    currentWidthDisplay.textContent = Math.round(width);
    columnCountDisplay.textContent = columns;
};

// Maak een nieuwe ResizeObserver aan
const resizeObserver = new ResizeObserver(entries => {
    // We observeren slechts één element, dus we kunnen direct de eerste entry pakken
    for (const entry of entries) {
        // Gebruik contentBoxSize
        const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
        const width = contentBoxSize.inlineSize;
        updateColumns(width);
    }
});

// Start het observeren van de container
resizeObserver.observe(container);

// Initiële update uitvoeren
updateColumns(container.offsetWidth);
