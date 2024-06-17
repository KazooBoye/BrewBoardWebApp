import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BrewBoardLogo.png";
import "./Header.css";

function Header({ user }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };

  const handleAccountSettings = () => {
    navigate("/AccountSettings");
  };

  const handleShopStatusUpdate = () => {
    navigate("/ShopStatusUpdate");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Row className="align-items-center">
            <Col className="align-items-right">
              <img
                src="./BrewBoardLogo.png"
                width="80"
                height="80"
                className="d-inline-block align-text-top"
                alt="Logo"
              />
            </Col>
            <Col>
              <h1 className="h1">BrewBoard</h1>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#near-you">Near You</Nav.Link>
            <Nav.Link href="#recent">Recent</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Dropdown show={showDropdown} onToggle={toggleDropdown}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Hi {user.username}
                  <br />
                  <small>Contribution Points: {user.contributionPoints}</small>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleAccountSettings}>Account Settings</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  {user.isShopAccount && (
                    <Dropdown.Item onClick={handleShopStatusUpdate}>Update Your Shop Status</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button
                  className="custom-signin-button"
                  variant=""
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleRegister}
                  className="custom-register-button"
                  variant=""
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
