import React, { useState, useEffect } from 'react';
import MealDisplay from './MealDisplay.js';
import './App.scss';
import Button from '@material-ui/core/Button';

function App() {
	const [ recipe, setRecipe ] = useState(null);

	async function fetchRecipe() {
		let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
		res = await res.json();
		setRecipe(res.meals[0]);
	}

	return (
		<div className="App">
			<div id="main">
				<h2>Feeling hungry?</h2>
				<h5>Get a random meal by clicking below</h5>
				<Button variant="contained" onClick={() => fetchRecipe()}>Get Meal 🍔</Button>
			</div>
			{
				recipe &&

					<MealDisplay 
						data={recipe}
					/>
			}
		</div>
	);
}

export default App;
