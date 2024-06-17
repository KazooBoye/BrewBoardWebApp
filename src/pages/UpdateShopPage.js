import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import Header from '../Header';
import './UpdateShopPage.css';

const UpdateShopPage = ({ user }) => {
  const [shopDetails, setShopDetails] = useState({
    name: '',
    description: '',
    location: '',
    seatsOccupied: '',
    menu: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setShopDetails((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated shop details
    console.log('Updated Shop Details:', shopDetails);
  };

  return (
    <div>
      <Header user={user} />
      <Container className="update-shop-page">
        <h1>Update Your Shop Details</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formShopName">
            <Form.Label>Shop Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter shop name"
              name="name"
              value={shopDetails.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formShopDescription">
            <Form.Label>Shop Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter shop description"
              name="description"
              value={shopDetails.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formShopLocation">
            <Form.Label>Shop Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter shop location"
              name="location"
              value={shopDetails.location}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formSeatsOccupied">
            <Form.Label>Seats Occupied</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter seats occupied"
              name="seatsOccupied"
              value={shopDetails.seatsOccupied}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formShopMenu">
            <Form.Label>Shop Menu</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter shop menu"
              name="menu"
              value={shopDetails.menu}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formShopImage">
            <Form.Label>Shop Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
            {shopDetails.image && (
              <Image src={shopDetails.image} thumbnail className="mt-2" />
            )}
          </Form.Group>
          <Button type="submit" className="update-button">Update Shop</Button>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateShopPage;
