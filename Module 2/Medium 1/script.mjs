/*
M1: Winkelwagen

Bouw een simpele winkelwagen waar je producten kunt toevoegen en verwijderen.

Vereisten:

    Gebruik een array van objecten voor de producten
    Elk product moet een naam en prijs hebben
    Gebruik array methods voor toevoegen, verwijderen en sorteren
    Toon bij elk product een verwijder-knop
    Update het totaal automatisch
*/
'use strict';
const nameInput = document.getElementById('productName');
const priceInput = document.getElementById('productPrice');
const addButton = document.getElementById('addToCart');
const sortButton = document.getElementById('sortByPrice');
const totalSpan = document.getElementById('total');
const cartList = document.getElementById('cartItems');
let cartItems = [];

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const price = Number(priceInput.value);
    if (!name || !price){
        alert('Vul alle velden in!')
        return;
    }

    // Product object aanmaken
    const product = {
        name: name,
        price : price
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
function updateCart(){
    cartList.innerHTML = '';
    const li = document.createElement('li');
    li.innerHTML = `
    ${item.name} - €${item.price.toFixed(2)}
    <button onclick="removeItems('${item.name}')">X</button>
    `;
    cartList.appendChild(li);

    let total = 0;
    for (let item of cartItems){
        total += item.price;
    }
    totalSpan.textContent = total.toFixed(2);
}
function removeItems(name){
    cartItems = cartItems.filter(item => item.name !== name);
    updateCart();
}