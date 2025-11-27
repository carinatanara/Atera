import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../sections/RecipeDetail';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  console.log('Recipe ID from URL:', id);
  
  if (!id) {
    return (
      <div className="text-center py-5">
        <p>No recipe ID provided</p>
      </div>
    );
  }
  
  return (
    <div>
      <RecipeDetail recipeId={id} />
    </div>
  );
};

export default RecipeDetailPage;