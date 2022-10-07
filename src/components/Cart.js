import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartList, removeItems, totalPrice, clear, cantProd} = useCartContext();

  if(cantProd() === 0){
    return(
      <div>
        <h1 className='py-5 my-5'>El carrito esta vacio.</h1>
        <Link to={`/`} style={{textDecoration: 'none'}}>
          <button type="button" className="btn btn-dark">Volver al home</button>
        </Link>
      </div>
    )
  } else{
  return (
    <div className='container'>
      <table className='table'>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Total</th>
          <th scope="col"></th>
        </tr>
      </thead>
        <tbody>
          {cartList.map((item)=>{
          return ( <tr key={item.id}>
            <th scope="row">1</th>
            <td><img src={item.image} className="card-img-top" alt="Foto" style={{maxWidth:'150px'}}/></td>
            <td>{item.title}</td>
            <td>{item.cantidad}</td>
            <td>{Number(item.cantidad)*Number(item.price)}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => removeItems(item.id)}>X</button></td>
          </tr>)})}
        </tbody>
      </table>
      <div>
        <h1><strong>Total: ${totalPrice()}.</strong></h1>
      </div>
      <div>
        <Link to={`/checkout`}><button type="button" className="btn btn-dark m-4">Checkout</button></Link>
        <button type="button" className="btn btn-dark m-4" onClick={() => clear()}>Limpiar carrito</button>
      </div>
    </div>
  )
}}

export default Cart