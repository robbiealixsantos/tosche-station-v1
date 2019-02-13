import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/CustomNavBar';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    );
  }
}

export default App;
