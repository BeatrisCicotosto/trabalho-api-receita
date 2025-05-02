import '../ReceitaDetalhada.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReceitaDetalhada({ id, onBack }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/meals/${id}`)
      .then(res => {
        setMeal(res.data.meals[0]);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!meal) return <p>Carregando...</p>;

  return (
    <div className='fundo'>
      <div className="receita-detalhada-container">
        <button className="back-button" onClick={onBack}>← Voltar</button>
        <div className="meal-details">
          <h2 className="meal-title">{meal.strMeal}</h2>
          <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-info">
            <p><strong>Categoria:</strong> {meal.strCategory}</p>
            <p><strong>Instruções:</strong><br /> {meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceitaDetalhada;
