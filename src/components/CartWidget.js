import React from 'react';
import carrito from '../assets/carrito.png';
import './NavBar.css';

const CartWidget = () => {
  return (
    <img src={carrito} className="banner-carrito" alt="carrito" /> 
  )
}

export default CartWidget