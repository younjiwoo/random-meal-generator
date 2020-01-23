import React from 'react';
import './IngredientList.scss';

function IngredientList({ recipe }) {

    const ingredients = [];

    const ingredientKeys = Object.keys(recipe).filter(k => { 
        return k.includes('strIngredient') && recipe[k] !== ""
    });

    const numOfIngredients = ingredientKeys.length;

    for (let i = 0; i < numOfIngredients; i++) {
        ingredients.push(`${recipe[`strIngredient${i + 1}`]} - ${recipe[`strMeasure${i + 1}`]}`);
    }

    return ingredients.map((ingredient, idx) => {
        return <li className="meal-ingredient" key={idx}>{ingredient}</li>
    });
}

export default IngredientList;
