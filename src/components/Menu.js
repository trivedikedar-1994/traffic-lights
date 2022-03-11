import React from 'react';
import logo from './../assets/image/logo.png';
import { BrowserRouter as Link } from "react-router-dom";

const Menu = () => {
    return (
       <>
            <nav className='navbar navbar-expand-lg header-navbar'>
                <div className="container">
                    <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='header-menu collapse navbar-collapse navbar-menu justify-content-center' id="navbarSupportedContent">
                        <ul className='navbar-nav mr-auto'>
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
                                <Link to='/say-hello' className='nav-link'>Say Hello</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </>
    );
};

export default Menu;