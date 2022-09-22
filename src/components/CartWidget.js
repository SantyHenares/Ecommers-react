import React from 'react';
import carrito from '../assets/carrito.png';
import './NavBar.css';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
  const {cantProd} = useCartContext();
  return (   
    <div className='widgetContainer'>
      <h3>{cantProd()}<img src={carrito} className="banner-carrito" alt="carrito" /></h3>
    </div>
  )
}

export default CartWidget