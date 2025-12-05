import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import '../styles/App.css'; 

const BookmarkPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('myBookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const filters = ['All', 'Local', 'Western', 'Asean', 'more...'];

  return (
    <div className="page-background">
      <Container className="py-5">
        
        {/* FILTER BAR */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 border-bottom pb-2 border-dark">
          <Nav className="mb-3 mb-md-0">
            {filters.map((filter) => (
              <Nav.Item key={filter}>
                <button 
                  className={`filter-text-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </Nav.Item>
            ))}
          </Nav>
          
          <Button className="btn-filter">
            <i className="bi bi-filter-right me-2"></i> Filter
          </Button>
        </div>

        {/* CARD GRID */}
        {bookmarks.length > 0 ? (
            <Row className="g-4">
            {bookmarks.map((item, index) => (
                <Col xs={12} md={12} lg={6} key={index}>
                <Card className="shadow-sm recipe-card card-horizontal">
                    <div className="card-img-left">
                        {item.thumbnail_url ? (
                            <img src={item.thumbnail_url} alt={item.name} />
                        ) : (
                            <i className="bi bi-image placeholder-icon"></i>
                        )}
                    </div>

                    <Card.Body className="card-body-horizontal">
                    <div className="w-100">
                        <Card.Title className="fw-bold mb-1 recipe-title">{item.name}</Card.Title>
                        <Card.Text className="text-muted small mb-2">{item.country || 'Recipe'}</Card.Text>
                        
                        <div className="mb-3 text-warning">
                          <span className="fw-bold text-dark me-2">4.5</span>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-fill me-1"></i>
                          <i className="bi bi-star-half me-1"></i>
                        </div>
                    </div>

                    <Button 
                        className="btn-card-action mt-auto"
                        onClick={() => navigate(`/recipe/${item.id}`)}
                    >
                        See Complete Recipe
                    </Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        ) : (
            // 4. Empty State Message
            <div className="text-center py-5">
                <i className="bi bi-bookmark-x display-1 text-muted"></i>
                <h3 className="mt-3 text-muted">No bookmarks yet</h3>
                <p>Go to the Recipe page and save some tasty food!</p>
                <Button variant="success" onClick={() => navigate('/recipe')}>Find Recipes</Button>
            </div>
        )}

      </Container>
    </div>
  );
};

export default BookmarkPage;