import React from 'react';

function IngredientList({ recipe }) {

    const ingredientKeys = Object.keys(recipe);

    const ingredients = [];
    
    ingredientKeys.forEach((key, i) => {
        if (key.includes('strIngredient') && recipe[key] && recipe[key] !== "") {
            const idx = key.slice(13);
            ingredients.push({ingredient: `${recipe[key]}`, measure: `${recipe[`strMeasure${idx}`]}`});
        }
    })

    return ingredients.map((ingre, i) => {
        return <li className="meal-ingredient" key={i}>{`${ingre.ingredient} - ${ingre.measure}`}</li>
    });
}

export default IngredientList;
