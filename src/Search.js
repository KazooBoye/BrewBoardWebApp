import { Container, Row, Col, Form } from 'react-bootstrap';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Search() {
    const locationOptions = [
        'An Giang', 'Bà Rịa - Vũng Tàu', 'Bạc Liêu', 'Bắc Giang', 'Bắc Kạn', 'Bắc Ninh', 'Bến Tre', 'Bình Định',
        'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên',
        'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang',
        'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An',
        'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi',
        'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế',
        'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
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
                    <Col md={2}><div className='customtext'>City / Province</div></Col>
                    <Col md={4}>
                        <Form.Select>
                            <option value="">Select City/Province...</option>
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