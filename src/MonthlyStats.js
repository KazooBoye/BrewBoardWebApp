import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MonthlyStats.css';

function MonthlyStats() {

    return (
        <Carousel>
            <Carousel.Item>
                <div className="carousel-item-bg d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <h1>Coffee Shops Available</h1>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-item-bg d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <h3>New Users in Last Month</h3>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-item-bg d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <h3>Reviews Given in Last Month</h3>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-item-bg d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <h3>Top 5 Most Active Users</h3>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default MonthlyStats;
