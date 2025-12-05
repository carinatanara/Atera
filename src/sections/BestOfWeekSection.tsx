import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { fetchRecipes } from '../services/recipeApi';
import { useNavigate } from 'react-router-dom';

const BestOfWeekSection: React.FC = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes('viral'); 
        
        setRecipes(data.results.slice(0, 4) || []);
      } catch (err) {
        console.error("Failed to load trending", err);
      } finally {
        setLoading(false);
      }
    };

    loadTrending();
  }, []);

  if (loading) {
    return (
        <section className="py-5 bg-light text-center">
            <Spinner animation="border" variant="success" />
        </section>
    );
  }

  return (
    <section className="viral-recipes py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold text-success mb-4">Viral Recipes</h2>
            <p className="lead text-muted mb-5">
              These are the recipes that have been trending everywhere — shared, tried, and perfected by food enthusiasts 
              just like you! From quick bites to full meals, every dish is made to inspire your next cooking adventure. 
              Let's make this week taste unforgettable!
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {recipes.map((recipe) => {
             const totalTime = (recipe.prep_time_minutes || 0) + (recipe.cook_time_minutes || 0);
             const displayTime = totalTime > 0 ? `${totalTime} mins` : '30 mins';
             
             const rating = recipe.user_ratings?.score ? (recipe.user_ratings.score * 5) : 4.5;
             const reviewCount = recipe.user_ratings?.count_positive || Math.floor(Math.random() * 100) + 10;

            return (
              <Col lg={3} md={6} key={recipe.id}>
              <Card className="h-90 border-0 shadow-sm rounded-3 recipe-card overflow-visible mt-5">
                <div className="d-flex justify-content-center position-relative" style={{ marginTop: '-90px' }}>
                  <div 
                    className="rounded-circle overflow-hidden border border-success border-4 shadow-sm bg-white"
                    style={{ width: '180px', height: '180px' }}
                  >
                    <img
                      src={recipe.thumbnail_url || 'https://placehold.co/300'}
                      alt={recipe.name}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </div>
                <Card.Body className="text-center pt-3">
                <Card.Title className="fw-bold text-dark mb-2 text-truncate" style={{ height: '2rem' }}>
                    {recipe.name}
                </Card.Title>
                  
                  {/* Rating */}
                  <div className="d-flex align-items-center justify-content-center gap-1 mb-3">
                    <div className="d-flex text-warning">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi ${i < Math.round(rating) ? 'bi-star-fill' : 'bi-star'}`}
                            style={{ fontSize: '0.8rem' }}
                        ></i>
                      ))}
                    </div>
                    <span className="text-muted small">({reviewCount} Reviews)</span>
                  </div>
                  
                  {/* Divider */}
                  <hr className="my-3" />
                  
                  {/* Bottom section */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i>
                      {displayTime}
                    </span>
                    <Button 
                      variant="success" 
                      size="sm"
                      className="rounded-pill px-3 py-1 fw-medium"
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                    >
                      View Recipe
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Button 
              variant="success" 
              size="lg" 
              className="rounded-pill px-5 py-3 fw-bold"
              onClick={() => navigate('/recipe')}
            >
              More →
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestOfWeekSection;
