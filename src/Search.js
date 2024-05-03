import { Container, Row, Col, Form } from 'react-bootstrap';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Search() {
    const locationOptions = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
    ];
    
    return (
        <div className='Search'>
            <Container>
                <Row className='align-items-center'>
                    <div className='customtextitalics'>Look for your favourite Coffee shops!
                    </div>
                </Row>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <div className="search-input-group">
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search by name..." />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col md={2}><div className='customtextitalics'>...or search by location</div></Col>
                    <Col md={1}><div className='customtext'>State</div></Col>
                    <Col md={2}>
                        <Form.Select>
                            <option value="">Select State...</option>
                            {locationOptions.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col md={1}><div className='customtext'>Town</div></Col>
                    <Col md={2}>
                        <Form.Select>
                            <option value="">Select Town...</option>
                            {locationOptions.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Search;