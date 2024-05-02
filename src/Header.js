import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './BrewBoardLogo.png';
import './Header.css';

function Header() {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#link">Trending</Nav.Link>
                        <Nav.Link href="#link">Near You</Nav.Link>
                        <Nav.Link href="#link">Recent</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="custom-signin-button">Sign In</Button>
                        <Button className="custom-register-button">Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
);
};
  
  export default Header;