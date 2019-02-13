import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './Main.css';
import MainCarousel from './Carousel.jsx';

class Main extends Component {
    render() {
        return (
            <Container>
                <Jumbotron id="mainJumbotron">
                    <h2>Welcome to Tosche Station</h2>
                    <p>Your one-stop shop for power converters and all your other moisture farming needs</p>                   
                    <Link to="/about">
                        <Button bsstyle="primary">About Us</Button>
                    </Link>
                    &nbsp; 
                    <Link to="/products">
                        <Button bsstyle="primary">Shop Now</Button>
                    </Link> 
                </Jumbotron>    
                <Container id="carouselContainer">  
                    <MainCarousel />  
                </Container>                  
            </Container>
        );
    }
}

export default Main;