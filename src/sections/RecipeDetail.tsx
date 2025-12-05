import * as React from 'react';
import { Card, Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import VideoThumbnail from './VideoThumbnail';
import { fetchRecipeById } from '../services/recipeApi';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface Component {
    raw_text: string;
}

interface Section {
    components: Component[];
}

interface Instruction {
    display_text: string;
}

interface RecipeData {
    id: number;
    name: string;
    description: string;
    thumbnail_url: string;
    video_url: string | null;
    prep_time_minutes: number | null;
    cook_time_minutes: number | null;
    sections: Section[];
    instructions: Instruction[];
    country: string;
}

const RecipeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [recipe, setRecipe] = useState<RecipeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRecipe = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const data = await fetchRecipeById(id);
                setRecipe(data);
            } catch (err) {
                setError('Failed to load recipe');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        loadRecipe();
    }, [id]);

    if (loading) {
        return (
        <Container className="text-center py-5">
            <Spinner animation="border" />
            <p>Loading recipe...</p>
        </Container>
        );
    }

    if (error || !recipe) {
        return (
            <Container className="text-center py-5">
                <p className="text-danger">{error || 'Recipe not found'}</p>
            </Container>
        );
    }

  return (
        <Container fluid className='container-fluid px-4'>
            <header className="mb-4 pt-3">
                <h2 className="fw-bold">{recipe.name}</h2>
                <p className="text-muted">{recipe.description}</p>
            </header>

            <section className='video-thumbnail rounded-3 overflow-hidden mb-4'>
                {recipe.video_url ? (
                    <div className="player-wrapper" style={{ position: 'relative', paddingTop: '56.25%'}}>
                        <ReactPlayer 
                            url={recipe.video_url}
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            onError={(e: any) => console.log("Video Error:", e)}
                        />
                    </div>
                ) : (
                    <VideoThumbnail image={recipe.thumbnail_url || ''} />
                )}
                {recipe.video_url && (
                    <div className="mt-3 d-flex justify-content-center">
                        <a 
                            href={recipe.video_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-card-action text-decoration-none d-flex align-items-center"
                            style={{ 
                                alignSelf: 'center', 
                                marginTop: '0', 
                                width: 'auto' 
                            }}
                        >
                            <i className="bi bi-box-arrow-up-right me-2"></i>
                            Having trouble? Watch Source Video
                        </a>
                    </div>
                )}
            </section>

            <section className='desc pt-4 pb-4'>
                <Row className='text-center'>
                    <Col>
                        <Stack direction='horizontal' gap={3} className="justify-content-center">
                            <i className='cat-bi bi-globe'></i>
                            <Stack className='text-start'>
                                <header className='cat-title'>Cuisine</header>
                                <p className='cat-body'>{recipe.country || 'General'}</p>
                            </Stack>
                        </Stack>
                    </Col>
                    
                    <Col>
                        <Stack direction='horizontal' gap={3} className="justify-content-center">
                            <i className='cat-bi bi-clock'></i>
                            <Stack className='text-start'>
                                <header className='cat-title'>Prep Time</header>
                                <p className='cat-body'>{recipe.prep_time_minutes || '-'} Min</p>
                            </Stack>
                        </Stack>
                    </Col>

                    <Col>
                        <Stack direction='horizontal' gap={3} className="justify-content-center">
                            <i className='cat-bi bi-egg-fried'></i>
                            <Stack className='text-start'>
                                <header className='cat-title'>Cook Time</header>
                                <p className='cat-body'>{recipe.cook_time_minutes || '-'} Min</p>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </section>

            <section className='ingredients py-4'>
                <Container fluid className='ing-container rounded-3 p-3'>
                    <header className='ing-header fw-bold pt-2 pb-3'>Ingredients</header>
                    <Row className='g-4'>
                        <Col md={12}>
                            {recipe.sections?.[0]?.components ? (
                                recipe.sections[0].components.map((ingredient, index) => (
                                    <p key={index} className="border-bottom pb-2">
                                        • {ingredient.raw_text}
                                    </p>
                                ))
                            ) : (
                                <p>No ingredients listed.</p>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='instructions py-4'>
                <header className='ins-header fw-bold pb-3'>Cooking Instructions</header>
                <Container fluid className='ins-container rounded-3 p-4'>
                    {recipe.instructions && recipe.instructions.length > 0 ? (
                        recipe.instructions.map((instruction, index) => (
                            <div key={index} className="mb-3">
                                <span className="fw-bold me-2">Step {index + 1}:</span>
                                <span>{instruction.display_text}</span>
                            </div>
                        ))
                    ) : (
                        <p>No instructions available.</p>
                    )}
                </Container>
            </section>
        </Container>
    );
};

export default RecipeDetail;