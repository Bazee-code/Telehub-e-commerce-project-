import React from 'react';
import './App.css';  
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

// local
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import ProductDetails from './components/ProductDetails.js';
import Cart from './components/Cart/Cart.js';
import Signup from './components/Signup.js';
import Modal from './components/Modal.js';
import Default from './components/Default.js';

class App extends React.Component {
  render() {
    return (
       <React.Fragment>
          <Router>
            <Navbar />  
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route exact path="/details" component={ProductDetails}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/cart" component={Cart}/>
                <Route component={Default}/>
            </Switch>
            <Modal />
          </Router>
       </React.Fragment>
    )
  }
}

export default App;

// <Route /> render the route that match the specific url
// <Switch > only renders the first route that matches the url
// <Exact > ensures we load up only the url we want