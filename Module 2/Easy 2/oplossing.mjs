'use strict';
const timeInput = document.getElementById('prepTime');
const nameInput = document.getElementById('recipeName');
const ingredientsInput = document.getElementById('ingredients');
const generateButon = document.getElementById('generateCard');
const resultDiv = document.getElementById('result');

generateButon.addEventListener('click', () => {
    const name = nameInput.value;
    const time = timeInput.value;
    console.log(ingredientsInput.value);
    const ingredients = ingredientsInput.value
        .split('\n')
        .filter(ingredient => ingredients.length > 0)

        const recipeCard = `
        <div class="recipe">
        <h2>${name}</h2>
        <p>Bereidingstijd: ${time} minuten</p>
        <h3>Ingrediënten:</h3>
        <ul>
            ${createIngredientsList(ingredients)}
        </ul>
        </div>
        `;
        
        function createIngredientsList(ingredients){
            let listItems = '';
            for (let ingredient of ingredients){
                listItems += `<li>${ingredient}</li>`
            }
            return listItems;
        }
        resultDiv.innerHTML = recipeCard;
});
