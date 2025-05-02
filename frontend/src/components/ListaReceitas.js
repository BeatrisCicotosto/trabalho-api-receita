import '../App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaReceitas({ onSelect }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/meals/images?q=chicken')
      .then(res => {
        setRecipes(res.data || []);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="recipe-container">
      <h2 className="title">Receitas Saborosas</h2>
      <div className="recipe-grid">
        {recipes.map(meal => (
          <div
            key={meal.id}
            className="recipe-card"
            onClick={() => onSelect(meal.id)}
          >
            <img className="recipe-img" src={meal.image} alt={meal.name} />
            <h3 className="recipe-name">{meal.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaReceitas;
