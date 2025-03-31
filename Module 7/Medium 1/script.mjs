const products = [
    { id: 1, name: "T-shirt", price: 15, quanitity: 2},
    { id: 2, name: "jeans", price: 45, quantity: 1},
    { id: 3, name: "Sokken", price: 5, quantity: 3},
];

const calculateTotal = (items) => {
    let total = 0;

    for(const item of items) {
        total += item.price * item.quantity;
        // debugger;

        console.log(`Product: ${item.name}, Prijs: ${item.prijs}, Aantal: ${item.quantity}, Subtotaal: €${item.price + item.quantity}`);
    }
    return total;
};

document.getElementById('calculateButton').addEventListener('click', () => {
    // debugger;

    console.log("Producten", products);

    const totalPrice = calculateTotal(products);

    console.log("Berekend totaal:", totalPrice);
    document.getElementById('total').textContent = totalPrice;
})