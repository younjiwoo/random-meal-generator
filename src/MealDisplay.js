import React from 'react';
import './MealDisplay.scss';

function MealDisplay(props) {

    const meal = props.data;
    const ingredients = [];
    for (let i = 1; i <= 30; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break; // stop if no more ingredients
        }
    }

    const ingredientList = ingredients.map((ingredient, idx) => {
        return <li className="meal-ingredient" key={idx}>{ingredient}</li>
    })

    return (
      <div className="meal-container">
        <img src={meal.strMealThumb} alt={`Image of ${meal.strMeal}`} />
        <p><strong>Category: </strong>{meal.strCategory}</p>
        <p><strong>Area: </strong>{meal.strArea}</p>
        <p><strong>Tags: </strong>{meal.strTags}</p>
        <p><strong>Ingredients: </strong></p>
        <ul>
            {ingredientList}
        </ul>
        <h3 className="blue-font">{meal.strMeal}</h3>
        <p>{meal.strInstructions}</p>
        <p><strong>Video Recipe:</strong></p>
        <iframe width="100%"
			src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
		</iframe>
      </div>
    );
  }
  
  export default MealDisplay;