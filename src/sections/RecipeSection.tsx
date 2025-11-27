import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { fetchRecipes } from '../services/recipeApi';
import { Navigate, useNavigate } from 'react-router-dom';

const RecipeSection: React.FC = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                setLoading(true);
                
                const searches = ['chicken', 'beef', 'salad', 'dessert', 'soup', 'pizza', 'burger', 'rice', 'pasta', 'sandwich'];
                const randomSearch = searches[Math.floor(Math.random() * searches.length)];
                
                const data = await fetchRecipes(randomSearch);
                setRecipes(data.results || []);
                
            } catch (err) {
                setError('Failed to load recipes');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadRecipes();
    }, []);

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" />
                <p>Loading</p>
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

    return(
        <Container fluid className='container-fluid px-4'>
            <Row className='py-3 g-4'>
                {recipes.map((recipe, idx) => (
                    <Col key={idx} md={3}>
                        <Card className='recipes-card h-100'>
                            <Card.Body className='recipes-card-body'>
                                <Card.Title className='recipes-title'>{recipe.name || 'Title'}</Card.Title>
                                <div className="recipes-image-box">
                                    <img
                                    src={recipe.thumbnail_url || "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
                                    alt={recipe.name || "Recipe"}
                                    className="recipes-img"
                                    />
                                </div>
                                <Button className='recipes-btn' 
                                    onClick={() => navigate(`/recipe/${recipe.id}`)}>
                                    See Complete Recipe
                                </Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                ))}     
            </Row>
        </Container>
    );
};

export default RecipeSection;