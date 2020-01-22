import React from 'react';
import './MealDisplay.scss';

function MealDisplay(props) {

    const ingredients = [];
    for (let i = 1; i <= 30; i++) {
        if (props.data[`strIngredient${i}`]) {
            ingredients.push(`${props.data[`strIngredient${i}`]} - ${props.data[`strMeasure${i}`]}`);
        } else {
            break; // stop if no more ingredients
        }
    }

    const ingredientList = ingredients.map(ingredient => {
        return <li>{ingredient}</li>
    })

    return (
      <div className="meal-container">
        <img src={props.data.strMealThumb} alt={`Image of ${props.data.strMeal}`} />
        <h3 className="blue-font">{props.data.name}</h3>
        <p><strong>Category: </strong>{props.data.strCategory}</p>
        <p><strong>Area: </strong>{props.data.strArea}</p>
        <p><strong>Tags: </strong>{props.data.strTags}</p>
        <p><strong>Ingredients: </strong></p>
        <ul>
            {ingredientList}
        </ul>
       

      </div>
    );
  }
  
  export default MealDisplay;