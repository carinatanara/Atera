import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BestOfWeekSection: React.FC = () => {
  const recipes = [
    {
      id: 1,
      title: 'Special Salad Chicken',
      rating: 4.5,
      reviews: 7,
      time: '20 mins',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      title: 'Noodle Chicken',
      rating: 4.5,
      reviews: 7,
      time: '20 mins',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      title: 'Chicken with green veg',
      rating: 4.5,
      reviews: 7,
      time: '20 mins',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      title: 'Spicy Chicken Bowl',
      rating: 4.5,
      reviews: 7,
      time: '20 mins',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section className="best-of-week py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold text-success mb-4">Best of Week</h2>
            <p className="lead text-muted mb-5">
              These are the recipes everyone's loving this week — shared, tried, and perfected by food enthusiasts 
              just like you! From quick bites to full meals, every dish is made to inspire your next cooking adventure. 
              Let's make this week taste unforgettable!
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {recipes.map((recipe) => (
            <Col lg={3} md={6} key={recipe.id}>
              <Card className="h-100 border-0 shadow-sm rounded-3 recipe-card">
                <div className="d-flex justify-content-center pt-2">
                  <div 
                    className="rounded-circle overflow-hidden border border-success border-2 image-bleed"
                    style={{ width: '180px', height: '180px' }}
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
                <Card.Body className="text-center pt-3">
                  <Card.Title className="fw-bold text-dark mb-2">{recipe.title}</Card.Title>
                  
                  {/* Rating */}
                  <div className="d-flex align-items-center justify-content-center gap-1 mb-3">
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi bi-star-fill ${i < Math.floor(recipe.rating) ? 'text-warning' : 'text-muted'}`}
                          style={{ fontSize: '0.8rem' }}
                        ></i>
                      ))}
                    </div>
                    <span className="text-muted small">({recipe.reviews} Reviews)</span>
                  </div>
                  
                  {/* Divider */}
                  <hr className="my-3" />
                  
                  {/* Bottom section */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">{recipe.time}</span>
                    <Button 
                      variant="success" 
                      size="sm"
                      className="rounded-pill px-3 py-1 fw-medium"
                    >
                      View Recipe
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Button 
              variant="success" 
              size="lg" 
              className="rounded-pill px-5 py-3 fw-bold"
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
