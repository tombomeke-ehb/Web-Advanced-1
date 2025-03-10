// Data structuur voor winkelwagen
let cartItems = [];

// Elementen ophalen
const nameInput = document.getElementById('productName');
const priceInput = document.getElementById('productPrice');
const addButton = document.getElementById('addToCart');
const sortButton = document.getElementById('sortByPrice');
const totalSpan = document.getElementById('total');
const cartList = document.getElementById('cartItems');

// Product toevoegen
addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const price = Number(priceInput.value);

    if (!name || !price) {
        alert('Vul alle velden in!');
        return;
    }

    // Product object aanmaken
    const product = {
        name: name,
        price: price
    };

    // Toevoegen aan array
    cartItems.push(product);

    // Alles updaten
    updateCart();
    
    // Inputs leegmaken
    nameInput.value = '';
    priceInput.value = '';
});

// Sorteren op prijs
sortButton.addEventListener('click', () => {
    cartItems.sort((a, b) => a.price - b.price);
    updateCart();
});

function updateCart() {
    // Cart items tonen
    cartList.innerHTML = '';
    for (let item of cartItems) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - €${item.price.toFixed(2)}
            <button onclick="removeItem('${item.name}')">X</button>
        `;
        cartList.appendChild(li);
    }

    // Totaal updaten
    let total = 0;
    for (let item of cartItems) {
        total += item.price;
    }
    totalSpan.textContent = total.toFixed(2);
}

function removeItem(name) {
    cartItems = cartItems.filter(item => item.name !== name);
    updateCart();
}