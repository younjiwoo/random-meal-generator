import React from 'react';
import './MealDisplay.scss';
import './IngredientList.js';
import IngredientList from './IngredientList.js';


function MealDisplay({ data: meal }) {

    const { strMeal, strMealThumb, strCategory, strArea, strTags, strInstructions, strYoutube } = meal;
    
    return (
      <div className="meal-container">
        <img src={strMealThumb} alt={`Image of ${strMeal}`} />
        <p><strong>Category: </strong>{strCategory}</p>
        <p><strong>Area: </strong>{strArea}</p>
        <p><strong>Tags: </strong>{strTags}</p>
        <p><strong>Ingredients: </strong></p>
        <ul>
            <IngredientList recipe={meal} />
        </ul>
        <h3 className="blue-font">{strMeal}</h3>
        <p>{strInstructions}</p>
        <p><strong>Video Recipe:</strong></p>
        <iframe width="100%"
			src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}>
		</iframe>
      </div>
    );
  }
  
  export default MealDisplay;