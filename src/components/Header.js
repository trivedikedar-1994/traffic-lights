import React from 'react';
import About from './Page/About';
import Contact from './Page/ContactForm';
import Products from './Page/Products';
import SayHello from './Page/SayHello';
import ThankYou from './Page/Thankyou';
import logo from './../assets/image/logo.png';
import './Header.css';
import ProductDetail from './ProductDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Page/Home';
import Login from './Page/Login';

const Header = () => {
    return (
        <>
            <Router>
                <nav className='navbar navbar-expand-lg header-navbar'>
                    <div className="container">
                        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='header-menu collapse navbar-collapse navbar-menu justify-content-center' id="navbarSupportedContent">
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item active'>
                                    <Link to="/" className='nav-link'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/products' className='nav-link'>Products</Link>
                                </li>
                            </ul>
                            <Link to='/' className="navbar-brand navbar-logo dt_logo"><img src={logo} className="App-logo" alt="logo" /></Link>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <Link to="/about-us" className='nav-link'>About Us</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/contact' className='nav-link'>Say Hello</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/Login' className='nav-link'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about-us">
                        <About />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/say-hello">
                        <SayHello />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail />
                    </Route>
                    <Route exact path="/thank-you">
                        <ThankYou />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
export default Header;
