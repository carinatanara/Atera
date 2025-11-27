import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-5 bg-light border-top">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-decoration-none text-muted">About</a>
              </li>
              <li>
                <a href="#store" className="text-decoration-none text-muted">Store</a>
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#contact" className="text-decoration-none text-muted">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#privacy" className="text-decoration-none text-muted">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-decoration-none text-muted">Terms and Condition</a>
              </li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="fw-bold text-dark mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#contact" className="text-decoration-none text-muted">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#privacy" className="text-decoration-none text-muted">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-decoration-none text-muted">Terms and Condition</a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center pt-4 border-top">
            <p className="text-muted mb-0">
              © 2024 Atera. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
