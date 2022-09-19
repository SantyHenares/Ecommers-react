import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({data}) => {
  const { addItem } = useCartContext();
  const [toCart, setToCart] = useState(0);

  const onAdd = (quantityToAdd) => {
    addItem(data, quantityToAdd);
    setToCart(quantityToAdd);
  };

  return (
    <div className="card mb-3 border-success" style={{width: 700}}>
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={data.image} className="img-fluid rounded-start border-success m-2" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.id}.{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text">${data.price}</p>
            {toCart === 0 ? <ItemCount stock={9} initial={0} onAdd={onAdd}/> : null}
          </div>
          <div className='d-flex justify-content-around mb-3'>
            <Link to={`/cart`} style={{textDecoration: 'none'}}>
              <button type="button" className="btn btn-dark">Finalizar compra</button>
            </Link>
            <Link to={`/`} style={{textDecoration: 'none'}}>
              <button type="button" className="btn btn-dark">Volver al home</button>
            </Link>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ItemDetail