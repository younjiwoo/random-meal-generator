import React, { useEffect } from 'react';
import MealDisplay from './MealDisplay.js';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
	const [ recipe, setRecipe ] = useState(null);

	useEffect(() => {
		const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
		res
			.json()
			.then(res => setRecipe(res))
			.catch(() => console.log('Something went wrong with the meal DB.'));
	});

	return (
		<div className="App">
			<h3>Feeling hungry?</h3>
			<h5>Get a random meal by clicking below</h5>
			<Button variant="contained">Get Meal 🍔</Button>
			<MealDisplay />
		</div>
	);
}

export default App;
