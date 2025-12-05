const API_BASE_URL = 'http://localhost:5000/api';

export const fetchRecipes = async (query: string = 'pasta') => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes?query=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const fetchRecipeById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};