import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
  return (
    <div className="card mb-3 border-success" style={{width: 700}}>
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={data.image} className="img-fluid rounded-start border-success m-2" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.id}.{data.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">${data.price}</p>
            <ItemCount stock={9} initial={0}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail