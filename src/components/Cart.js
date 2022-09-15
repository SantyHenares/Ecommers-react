import React from 'react';
import { useCartContext } from '../components/context/CartContext';

const Cart = () => {
  const {cartList} = useCartContext();
  return (
    <div>Carrito de compras.{cartList}</div>
  )
}

export default Cart