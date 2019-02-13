import React, { Component } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './Products.css';

class Products extends Component {
    render() {
        return (
            <Container>
                <Row className="show-grid text-center itemContainer">
                    <Col xs={12} sm={4} >
                        <Image src="assets/power-converters.png" className="item-pic"/>
                        <h5>Power Converters</h5>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/compressor.png" className="item-pic"/>
                        <h5>Compressor</h5>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/condenser-module.png" className="item-pic"/>
                        <h5>Condenser Module</h5>
                    </Col>
                </Row>

                <Row className="show-grid text-center itemContainer">
                    <Col xs={12} sm={4} >
                        <Image src="assets/spanner.png" className="item-pic"/>
                        <h5>Hydrospanners</h5>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/crates.png" className="item-pic"/>
                        <h5>Storage Containers</h5>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/viewfinder.png" className="item-pic"/>
                        <h5>Viewfinder Parts</h5>
                    </Col>
                </Row>                   
            </Container>
        );
    }
}

export default Products;