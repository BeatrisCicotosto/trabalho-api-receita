const axios = require('axios');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

// Rota para buscar receita por nome e imagem
app.get('/meals/images', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`${API_BASE}/search.php?s=${q}`);
    const meals = response.data.meals || [];

    const result = meals.map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      image: meal.strMealThumb
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagens de receitas.' });
  }
});

// Rota para buscar receita por ID
app.get('/meals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar receita por ID.' });
  }
});

// Rota para listar categorias
app.get('/categories', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/categories.php`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
