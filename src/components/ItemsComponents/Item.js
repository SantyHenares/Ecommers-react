import React from 'react'
import './Item.css';

const Item = ({title, price, pictureUrl}) => {
  return (
    <div className="card border-success">
      <img src={pictureUrl} className="card-img-top" alt="Foto"/>
      <div className="card-body">
        <h5 className="card-title link-dark">{title}</h5>
        <p className="card-text link-dark">${price}</p>
      </div>
    </div>
  )
}

export default Item