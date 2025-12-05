import React, { useState } from 'react';
import { Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (searchTerm.trim()) {
            navigate(`/recipe?search=${searchTerm}`);
        }
    };

	return (
		<header>
			<Navbar bg="light" expand="lg" className="px-4 py-3">
				<Navbar.Brand as={Link} to="/" className="fw-bold text-success fs-3">
					Atera
				</Navbar.Brand>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about" className="text-dark fw-medium ms-4 me-4">About</Nav.Link>
						<Nav.Link as={Link} to="/bookmark" className="text-dark fw-medium me-4">Bookmark</Nav.Link>
						<Nav.Link as={Link} to="/recipe" className="text-dark fw-medium me-4">Recipe</Nav.Link>
					</Nav>
					
					<Form className="d-flex me-3" onSubmit={handleSearch}>
						<InputGroup>
							{/* <InputGroup.Text className="bg-light border-end-0">
								<i className="bi bi-search"></i>
							</InputGroup.Text> */}
							<input
								type="search"
								placeholder="Search"
								className="form-control"
								style={{ backgroundColor: '#f8f9fa' }}
								value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</InputGroup>
					</Form>
					
					<div className="bg-dark rounded-circle d-flex align-items-center justify-content-center" 
							style={{ width: '40px', height: '40px' }}>
						<i className="bi bi-person-fill text-white"></i>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
