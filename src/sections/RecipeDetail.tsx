import * as React from 'react';
import { Card, Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import VideoThumbnail from './VideoThumbnail';
import { fetchRecipeById } from '../services/recipeApi';
import { useEffect, useState } from 'react';


interface RecipeDetailProps {
  recipeId: string; // Remove the default value
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipeId }) => { // Remove = '8138'
    const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
        try {
            setLoading(true);
            console.log('Loading recipe with ID:', recipeId);
            const data = await fetchRecipeById(recipeId);
            console.log('Full API Response:', data); // See the full response
            console.log('Recipe sections:', data.sections);
            console.log('Recipe instructions:', data.instructions);
            setRecipe(data);
        } catch (err) {
            setError('Failed to load recipe');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    loadRecipe();
}, [recipeId]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading recipe...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <p className="text-danger">{error}</p>
      </Container>
    );
  }

  if (!recipe) {
    return <Container><p>No recipe found</p></Container>;
  }

  return(
    <Container fluid className='container-fluid px-4'>
        <section className='video-thumbnail rounded-3'>
            <VideoThumbnail image={recipe.thumbnail_url || ''} onClick={() => console.log("Play Video")} />
        </section>

        <section className='desc pt-4 pb-4'>
            <Row className='text-center'>
                <Col>
                    <Stack direction='horizontal' gap={3} className="justify-content-center">
                        <i className='cat-bi bi-globe'></i>
                        <Stack className='text-start'>
                            <header className='cat-title'>Cuisine</header>
                            <p className='cat-body'>{recipe.cuisine || 'International'}</p>
                        </Stack>
                    </Stack>
                </Col>
                
                <Col>
                    <Stack direction='horizontal' gap={3} className="justify-content-center">
                        <i className='cat-bi bi-clock'></i>
                        <Stack className='text-start'>
                            <header className='cat-title'>Prep Time</header>
                            <p className='cat-body'>{recipe.prep_time_minutes || '15'} Minutes</p>
                        </Stack>
                    </Stack>
                </Col>

                <Col>
                    <Stack direction='horizontal' gap={3} className="justify-content-center">
                        <i className='cat-bi bi-egg-fried'></i>
                        <Stack className='text-start'>
                            <header className='cat-title'>Cook Time</header>
                            <p className='cat-body'>{recipe.cook_time_minutes || '30'} Minutes</p>
                        </Stack>
                    </Stack>
                </Col>

                <Col>
                    <Stack direction='horizontal' gap={3} className="justify-content-center">
                        <i className='cat-bi bi-star'></i>
                        <Stack className='text-start'>
                            <header className='cat-title'>Difficulty Level</header>
                            <p className='cat-body'>Easy</p>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
            
        </section>

        <section className='ingredients py-4'>
            <Container fluid className='ing-container rounded-3 p-3'>
                <header className='ing-header fw-bold pt-2 pb-3'>Ingredients</header>
                <Row className='g-4'>
                    <Col className=''>
                        {recipe.sections?.[0]?.components?.slice(0, 4).map((ingredient: any, index: number) => (
                            <p key={index}>{ingredient.raw_text}</p>
                        ))}
                    </Col>

                    <Col>
                        {recipe.sections?.[0]?.components?.slice(4, 8).map((ingredient: any, index: number) => (
                            <p key={index}>{ingredient.raw_text}</p>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='instructions py-4'>
            <header className='ins-header fw-bold pb-3'>Cooking Instructions</header>
            <Container fluid className='ins-container rounded-3 p-4'>
                {recipe.instructions?.map((instruction: any, index: number) => (
                    <p key={index}>{instruction.display_text}</p>
                ))}
            </Container>
        </section>
    </Container>
    
  );
};

export default RecipeDetail;