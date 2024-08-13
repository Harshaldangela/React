import React, { useState } from 'react';
import data from './data';
import Meals from './components/Meals'; 

const App = () => {
  const [meals, setMeals] = useState(data);

  function removeMeal(id) {
    const newMeals = meals.filter(meal => meal.id !== id); 
    setMeals(newMeals); 
  }

  if (meals.length === 0) {
    return (
      <div className="refresh">
        <h1>No meals left</h1>
        <button className='btn-white' onClick={() => setMeals(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Meals meals={meals} removeMeal={removeMeal}></Meals>
    </div>
  );
}

export default App;
