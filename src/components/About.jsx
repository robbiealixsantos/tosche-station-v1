import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button, Col, Row, Image } from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <Container>
                <Jumbotron id="mainJumbotron">
                    <h2>About Us at Tosche Station</h2>
                    <p>We began as a modest power station and repair shop on the outskirts of Anchorhead on the desert world of Tatooine. We are dedicated
                        to making life as easy as possible for not just Tattooine's Moisture Farmers but for the rest of the Outer Rim. 
                        We've now grown to three locations and we hope to continue to provide our community with only the best power converters 
                        and moisture farming equipment in the galaxy.</p>                   
                    <Link to="/products">
                        <Button bsstyle="primary">Shop Now</Button>
                    </Link> 
                </Jumbotron> 
                <Row id="meetTheTeam">
                    <h2>Meet The Team</h2>
                </Row>                  
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} >
                        <Image src="assets/laze-loneozner.png" roundedCircle className="profile-pic" />
                        <h5>Laze Loneozer</h5>
                        <h6>Operations Manager</h6>
                        <p></p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/jim-sullust.png" roundedCircle className="profile-pic" />
                        <h5>Mavv Schamb</h5>
                        <h6>Chief Operating Officer</h6>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src="assets/merl-tosche.png" roundedCircle className="profile-pic" />
                        <h5>Merl Tosche</h5>
                        <h6>Chief Executive Officer</h6>
                    </Col>
                </Row>                
            </Container>
        );
    }
}

export default About;