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
                            <Link className="nav-link active" to={`/category/white`}>Remeras blancas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={`/category/black`}>Remeras negras</Link>
                        </li>
                    </ul>
                    <Link className="nav-link active" to={`/cart`}><CartWidget /></Link>
                </div>
            </div>
        </nav>
    );
} 

export default NavBar;