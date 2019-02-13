import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

class MainCarousel extends Component {
    render() {
        return (
            <Carousel id="mainCarousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/tosche-station-main.png"
                    alt="Tosche Station Anchorhead"
                    />
                    <Carousel.Caption>
                    <h3>Our Original Anchorhead Location</h3>
                    <p>Located Just outside of the Great Chott Salt Flats of Tatooine</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/tosche-station-mos-eisley.png"
                    alt="Tosche Station Mos Eisley"
                    />

                    <Carousel.Caption>
                    <h3>Mos Eisley Location</h3>
                    <p>Located conveniently on the North Side of Junk Row</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="assets/tosche-station-jakku.png"
                    alt="Tosche Station Jakku"
                    />

                    <Carousel.Caption>
                    <h3>Grand Opening: Jakku</h3>
                    <p>Located right next to Nima Outpost</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MainCarousel;