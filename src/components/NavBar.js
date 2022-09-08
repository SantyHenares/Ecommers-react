import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.jpeg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <img src={logo} className="banner-logo" alt="logo" /> 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={`/category/electronics`}>Electrónica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={`/category/jewelery`}>Joyería</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
} 

export default NavBar;