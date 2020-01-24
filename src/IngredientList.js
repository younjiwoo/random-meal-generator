import React from 'react';
import './IngredientList.scss';

function IngredientList({ recipe }) {

    const ingredientKeys = Object.keys(recipe);

    let hash = {
        ingredient: [],
        measure: []
    };
    
    ingredientKeys.forEach((key, i) => {
        if (key.includes('strIngredient') && recipe[key] && recipe[key] !== "") {
            const idx = key.slice(13);
            hash.ingredient[idx] = recipe[key];
            hash.measure[idx] = recipe[`strMeasure${idx}`];
        }

    })

    return hash.ingredient.map((ingre, i) => {
        return <li className="meal-ingredient" key={i}>{`${ingre} - ${hash.measure[i]}`}</li>
    });
}

export default IngredientList;
