import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';
import { FaGoogle, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login (replace with actual login logic)
    const user = { email, password };

    if (rememberMe) {
      // Store user info in local storage
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      // Clear local storage
      localStorage.removeItem('user');
    }

    // Proceed with login logic
    console.log('User logged in', user);
  };

  // Check for saved user info on component mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setEmail(savedUser.email);
      setPassword(savedUser.password);
      setRememberMe(true);
    }
  }, []);

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center login-container">
      <div className="brand-logo">
        <h1 className="h1">BrewBoard</h1>
      </div>
      <Button href="/" className="back-button">
        <FaArrowLeft /> Back
      </Button>
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Hi, Welcome back to BrewBoard 👋</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Button variant="light" className="w-100 mb-3">
              <FaGoogle /> Login with Google
            </Button>
            <div className="text-center mb-3">
              <small className="text-muted">or Login with Email</small>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="E.g. johndoe@email.com" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember Me" checked={rememberMe} onChange={handleRememberMeChange} />
              <a href="#" className="text-primary">Forgot Password?</a>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 login-button">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <small className="text-muted">Not registered yet? <a href="/register" className="text-primary">Create an account</a></small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
