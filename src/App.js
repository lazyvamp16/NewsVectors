import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar'; // Import Navbar component from React Bootstrap
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'; // Import Container component from React Bootstrap
import Dropdown from './components/Dropdown'; // Import your Dropdown component
import Contact from './components/Contact';
import NewsPage from './components/NewsPage'; // Import your NewsPage component
import SentimentPage from './components/SentimentPage'; // Import SentimentPage component


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">NEWS VECTORS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/sentiment-analysis">Sentiment Analysis</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/forecast">Forecast</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                <NavDropdown title="Focused Shares" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#web/3.1">Tata Motors</NavDropdown.Item>
                  <NavDropdown.Item href="#web/3.2">HDFC Bank</NavDropdown.Item>
                  <NavDropdown.Item href="#web/3.3">Infosys</NavDropdown.Item>
                  <NavDropdown.Item href="#web/3.4">Zomato</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Dropdown />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/sentiment-analysis" element={<SentimentPage />} />  
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
