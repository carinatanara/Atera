import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { fetchRecipes } from '../services/recipeApi';
import { useNavigate, useSearchParams } from 'react-router-dom';

const RecipeSection: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [recipes, setRecipes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

    const currentSearch = searchParams.get('search');

    useEffect(() => {
        const saved = localStorage.getItem('myBookmarks');
        if (saved) {
            const parsed = JSON.parse(saved);
            setBookmarkedIds(parsed.map((b: any) => b.id));
        }

        const loadRecipes = async () => {
            try {
                setLoading(true);
                setError(null);
                const searchTerm = currentSearch || 'healthy';
                const data = await fetchRecipes(searchTerm);
                setRecipes(data.results || []);
            } catch (err) {
                setError('Failed to load recipes');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadRecipes();
    }, [currentSearch]);

    const toggleBookmark = (recipe: any) => {
        const saved = localStorage.getItem('myBookmarks');
        let bookmarks = saved ? JSON.parse(saved) : [];

        const isAlreadySaved = bookmarks.some((b: any) => b.id === recipe.id);

        if (isAlreadySaved) {
            bookmarks = bookmarks.filter((b: any) => b.id !== recipe.id);
            console.log("Removed:", recipe.name);
        } else {
            bookmarks.push(recipe);
            console.log("Saved:", recipe.name);
        }

        localStorage.setItem('myBookmarks', JSON.stringify(bookmarks));
        
        setBookmarkedIds(bookmarks.map((b: any) => b.id));
    };

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
            {currentSearch && (
                <h4 className="fw-bold mb-1">Results for "{currentSearch}"</h4>
            )}
            
            <Row className='py-3 g-4'>
                {recipes.map((recipe, idx) => {
                    const isBookmarked = bookmarkedIds.includes(recipe.id);
                    return(
                        <Col key={idx} md={3}>
                            <Card className='recipes-card h-100'>
                                <button 
                                    className="position-absolute top-0 end-0 m-3 p-0 border-0 bg-transparent"
                                    style={{ 
                                        zIndex: 10
                                    }}
                                    onClick={() => toggleBookmark(recipe)}
                                >
                                    <i 
                                        className={`bi ${isBookmarked ? 'bi-bookmark-fill text-success' : 'bi-bookmark text-'} fs-4`}
                                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}

                                    ></i>
                                </button>

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
                    );
                })}     
            </Row>
        </Container>
    );
};

export default RecipeSection;