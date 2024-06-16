import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import './Register.css';

const provinces = [
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bạc Liêu', 'Bắc Giang', 'Bắc Kạn', 'Bắc Ninh', 'Bến Tre', 'Bình Định',
  'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên',
  'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang',
  'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An',
  'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi',
  'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế',
  'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
];

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(calculatePasswordStrength(value));
  };
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength += 20;
    if (password.length > 10) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 10;
    if (/[^A-Za-z0-9]/.test(password)) strength += 10;
    return strength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log('User registered', { username, email, password, phoneNumber, location });
  };

  return (
    <Container fluid className="register-container vh-100 d-flex justify-content-center align-items-center">
      <div className="brand-logo">
        <h1 className="h1">BrewBoard</h1>
      </div>
      <Button href="/" className="back-button">
        <FaArrowLeft /> Back
      </Button>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} className="register-form">
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Create an Account</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="E.g. johndoe@brewboard.com" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
              <div>Password Strength</div>
              <ProgressBar now={passwordStrength} label={`${passwordStrength}%`} className="mt-2" />
            </Form.Group>
            <Form.Group controlId="formBasicPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </Form.Group>
            <Form.Group controlId="formBasicLocation">
              <Form.Label>Current Location</Form.Label>
              <Form.Control as="select" value={location} onChange={handleLocationChange}>
                <option value="">Select your location</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>{province}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100 login-button">
              Register
            </Button>
          </Form>
          <div className="text-center mt-3">
            <small className="text-muted">Already have an account? <a href="/login" className="text-primary">Login here</a></small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
