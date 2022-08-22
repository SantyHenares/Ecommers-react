import bootstrap from 'bootstrap';
import React from 'react';
import './NavBar.css';
import logo from './logo.jpeg';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <img src={logo} className="Banner-logo" alt="logo" /> 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" src="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" src="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" src="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 

export default NavBar;