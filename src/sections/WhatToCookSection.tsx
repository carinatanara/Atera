import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WhatToCookSection: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { label: 'American', searchTerm: 'american' },
    { label: 'Asia', searchTerm: 'asian' },
    { label: 'Italian', searchTerm: 'italian' },
    { label: 'Dessert', searchTerm: 'dessert' },
  ];

  return (
    <section className="what-to-cook py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold text-success mb-4">What To Cook?</h2>
            <p className="lead text-muted mb-9">
              Not sure what to cook? Don't worry — we've got you covered! Simply tell us what ingredients you have, 
              and we'll inspire you with delicious, easy-to-make recipes tailored to your taste. 
              Cooking at home has never been this fun and effortless!
            </p>
            
            <Row className="justify-content-center">
              {categories.map((item, index) => (
                <Col xs={6} sm={3} key={index} className="mb-3">
                  <Button 
                    variant="outline-success" 
                    className="w-100 py-2 rounded-pill fw-medium border-2"
                    style={{ fontSize: '1rem' }}
                    onClick={() => navigate(`/recipe?search=${item.searchTerm}`)}
                  >
                    {item.label}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatToCookSection;
