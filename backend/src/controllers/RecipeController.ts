  import { Request, Response } from 'express';
  import { searchRecipes, getRecipeDetails } from '../services/recipeService';

  export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    const recipes = await searchRecipes(query as string || 'pasta');
    res.json(recipes);
  } catch (error: any) {
    console.error('Error in getAllRecipes:', error);
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message,
      details: error.response?.data || error 
    });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await getRecipeDetails(req.params.id);
    res.json(recipe);
  } catch (error: any) {
    console.error('Error in getRecipeById:', error);
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message,
      details: error.response?.data || error 
    });
  }
};