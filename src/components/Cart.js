import React from 'react';
import { useCartContext } from '../components/context/CartContext';

const Cart = () => {
  const {cartList} = useCartContext();

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
            <td><button type="button" className="btn btn-danger">X</button></td>
          </tr>)})}
        </tbody>
      </table>
    </div>
  )
}

export default Cart