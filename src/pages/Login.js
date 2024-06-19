// Login.js
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Adjust the path as per your project structure

const Login = () => {
  const { setIsActive } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, phone_number }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const user = { email, password, phone_number };

      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }

      setIsActive(true); // Set is_active to true upon successful login
      navigate("/"); // Redirect or navigate to another page upon successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle error, e.g., display an error message to the user
    }
  };

  // Load saved user info on component mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setEmail(savedUser.email);
      setPassword(savedUser.password);
      setRememberMe(true);
    }
  }, []);

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center login-container"
    >
      <div className="brand-logo">
        <h1 className="h1">BrewBoard</h1>
      </div>
      <Row className="w-100 justify-content-center">
        <Col md={4}>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">
              Hi, Welcome back to BrewBoard 👋
            </h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="E.g. johndoe@email.com"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Label>or use your Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="E.g. 012 345 6789"
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group
              controlId="formBasicCheckbox"
              className="d-flex justify-content-between"
            >
              <Form.Check
                type="checkbox"
                label="Remember Me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <a href="#" className="text-primary">
                Forgot Password?
              </a>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 login-button"
            >
              Login
            </Button>
            <Button href="/" className="w-100 btn-light">
              <FaArrowLeft /> Back
            </Button>
          </Form>
          <div className="text-center mt-3">
            <small className="text-muted">
              Not registered yet?{" "}
              <a href="/register" className="text-primary">
                Create an account
              </a>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
