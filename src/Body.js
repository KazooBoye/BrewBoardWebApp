import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import './BrewBoardLogo.png'
import { useNavigate } from 'react-router-dom'

function Body() {

const navigate = useNavigate();

const HandleRegister = () => {
    navigate("/shop")
    }
    return(
        <Container>
            <Row className='align-items-center'>
                <Col>
                <Card onClick={HandleRegister} className='rounded' style={{width: '16rem'}}>
                    <Card.Img variant='top' src="BrewBoardLogo.png" width='300px' height='250px' alt="" />
                    <Card.Body>
                            <Card.Title>Coffee Shop Name</Card.Title>
                            <Card.Text>Location: </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>
                            Ratings:
                        </ListGroupItem>
                        <ListGroupItem>Seats Occupied:</ListGroupItem>
                        <ListGroupItem>Accessibility:</ListGroupItem>
                    </ListGroup>
                    <Card.Footer><small class="text-body-secondary">Last updated: 3 mins ago</small></Card.Footer>
                </Card>
                </Col>
                <Col>
                <Card className='rounded' style={{width: '16rem'}}>
                    <Card.Img variant='top' src="BrewBoardLogo.png" width='300px' height='250px' alt="" />
                    <Card.Body>
                            <Card.Title>Coffee Shop Name</Card.Title>
                            <Card.Text>Location: </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>
                            Ratings:
                        </ListGroupItem>
                        <ListGroupItem>Seats Occupied:</ListGroupItem>
                        <ListGroupItem>Accessibility:</ListGroupItem>
                    </ListGroup>
                    <Card.Footer><small class="text-body-secondary">Last updated: 3 mins ago</small></Card.Footer>
                </Card>
                </Col>
                <Col>
                <Card className='rounded' style={{width: '16rem'}}>
                    <Card.Img variant='top' src="BrewBoardLogo.png" width='300px' height='250px' alt="" />
                    <Card.Body>
                            <Card.Title>Coffee Shop Name</Card.Title>
                            <Card.Text>Location: </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>
                            Ratings:
                        </ListGroupItem>
                        <ListGroupItem>Seats Occupied:</ListGroupItem>
                        <ListGroupItem>Accessibility:</ListGroupItem>
                    </ListGroup>
                    <Card.Footer><small class="text-body-secondary">Last updated: 3 mins ago</small></Card.Footer>
                </Card>
                </Col>
                <Col>
                <Card className='rounded' style={{width: '16rem'}}>
                    <Card.Img variant='top' src="BrewBoardLogo.png" width='300px' height='250px' alt="" />
                    <Card.Body>
                            <Card.Title>Coffee Shop Name</Card.Title>
                            <Card.Text>Location: </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>
                            Ratings:
                        </ListGroupItem>
                        <ListGroupItem>Seats Occupied:</ListGroupItem>
                        <ListGroupItem>Accessibility:</ListGroupItem>
                    </ListGroup>
                    <Card.Footer><small class="text-body-secondary">Last updated: 3 mins ago</small></Card.Footer>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Body;