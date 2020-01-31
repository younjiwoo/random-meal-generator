import React from 'react';
import './MealDisplay.scss';
import IngredientList from './IngredientList.js';


function MealDisplay({ data: meal }) {

    const { strMeal, strMealThumb, strCategory, strArea, strTags, strInstructions, strYoutube } = meal;
    
    return (
      <div className="meal-container">

		<div className="columns">

			<div className="left-column">
				<img src={strMealThumb} alt={`${strMeal}`} />
				<p><strong>Category: </strong>{strCategory}</p>
				<p><strong>Area: </strong>{strArea}</p>
				<p><strong>Tags: </strong>{strTags}</p>
				<p><strong>Ingredients: </strong></p>
				<ul>
					<IngredientList recipe={meal} />
				</ul>
			</div>
		
			<div className="right-column">
				<h3 className="blue-font">{strMeal}</h3>
				<p className="instructions">{strInstructions}</p>
			</div>
		</div>

		<div className="youtube-container">
			<p><strong>Video Recipe:</strong></p>
			<iframe 
				width="560" 
				height="349" 
				title="recipeVideo"
				src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} 
				frameBorder="0" 
				allowFullScreen>
			</iframe>
		</div>

      </div>
    );
  }
  
  export default MealDisplay;