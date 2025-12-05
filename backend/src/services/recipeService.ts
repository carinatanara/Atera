import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); 

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

console.log('Loading environment variables...');
console.log('RAPIDAPI_KEY exists:', !!RAPIDAPI_KEY);
console.log('RAPIDAPI_HOST:', RAPIDAPI_HOST);

export const searchRecipes = async (query: string) => {
  try {
    console.log('RAPIDAPI_KEY:', RAPIDAPI_KEY ? 'Set' : 'Missing');
    console.log('RAPIDAPI_HOST:', RAPIDAPI_HOST);
    console.log('Searching for:', query);

    const response = await axios.get(
      `https://${RAPIDAPI_HOST}/recipes/list`,
      {
        params: { 
          from: 0,
          size: 20,
          q: query
        },
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST
        }
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error in searchRecipes:', error.message);
    console.error('Error response:', error.response?.data);
    console.error('Error status:', error.response?.status);
    throw error;
  }
};

export const getRecipeDetails = async (id: string) => {
  try {
    console.log('Getting recipe details for ID:', id);
    
    const response = await axios.get(
      `https://${RAPIDAPI_HOST}/recipes/get-more-info`,
      {
        params: { id },
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST
        }
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Error in getRecipeDetails:', error.message);
    console.error('Error response:', error.response?.data);
    throw error;
  }
};