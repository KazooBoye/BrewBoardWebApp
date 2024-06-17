import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Image, Card } from 'react-bootstrap';
import Header from '../Header';
import './ShopPage.css';
import { FaCouch, FaMapMarkerAlt, FaSyncAlt, FaThumbsUp, FaStar } from 'react-icons/fa';

const ShopPage = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: '',
    content: '',
    image: '',
    rating: 0,
  });
  const [isLiked, setIsLiked] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // Fetch initial reviews and likes data
    // setReviews(fetchedReviews);
    // setIsLiked(initialLikedStatus);
    // setLikes(initialLikes);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewReview((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleRatingChange = (e) => {
    setNewReview((prev) => ({
      ...prev,
      rating: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the new review
    setReviews((prev) => [...prev, { ...newReview, id: Date.now(), likes: 0 }]);
    setNewReview({ title: '', content: '', image: '', rating: 0 });
  };

  const handleLike = (id) => {
    if (!user) return;
    const updatedReviews = reviews.map((review) =>
      review.id === id
        ? { ...review, likes: review.likes + (isLiked[id] ? -1 : 1) }
        : review
    );
    setReviews(updatedReviews);
    setIsLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Header user={user} />
      <Container className="shop-page">
        <Row className="shop-info">
          <Col md={8}>
            <Image src="https://via.placeholder.com/800x600" fluid />
          </Col>
          <Col md={4}>
            <h1>Phe La Coffee</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {user ? (
              <Button className="checkin-button">Check in now</Button>
            ) : (
              <Button className="checkin-button" disabled>
                Check in now
              </Button>
            )}
          </Col>
        </Row>
        <Row className="shop-details">
          <Col md={4}>
            <div>
              <FaCouch /> Seats occupied: 12/36
            </div>
            <div>
              <FaMapMarkerAlt /> Location: Ba Dinh
            </div>
            <div>
              <FaSyncAlt /> Last updated: 5 mins ago
            </div>
          </Col>
          <Col md={4} className="menu">
            <h3>Menu</h3>
            <ul>
              <li>Black Coffee</li>
              <li>Latte</li>
              <li>Espresso</li>
              <li>Americano</li>
              <li>Tropical Juice</li>
            </ul>
          </Col>
        </Row>
        <Row className="reviews-section">
          <Col md={12}>
            <h2>Reviews</h2>
            {user ? (
              <Form onSubmit={handleSubmit} className="review-form">
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={newReview.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formContent">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your review"
                    name="content"
                    value={newReview.content}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                  {newReview.image && (
                    <Image src={newReview.image} thumbnail className="mt-2" />
                  )}
                </Form.Group>
                <Form.Group controlId="formRating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    name="rating"
                    value={newReview.rating}
                    onChange={handleRatingChange}
                  >
                    <option value={0}>Select rating</option>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <option key={star} value={star}>
                        {star} Star{star > 1 ? 's' : ''}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button type="submit">Submit Review</Button>
              </Form>
            ) : (
              <p>Please log in to post a review.</p>
            )}
            {reviews.map((review) => (
              <Card key={review.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{review.title}</Card.Title>
                  <Card.Text>{review.content}</Card.Text>
                  {review.image && <Image src={review.image} thumbnail />}
                  <div className="review-rating">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <div className="review-likes">
                    <Button
                      variant="link"
                      onClick={() => handleLike(review.id)}
                      disabled={!user}
                    >
                      <FaThumbsUp />
                    </Button>
                    {review.likes} Likes
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopPage;
