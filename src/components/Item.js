import React from 'react'
import './NavBar.css';

const Item = ({ id, tittle, price, picture}) => {
  return (
    <div><div className="card">
    <img src={picture} className="card-img-top" alt="Foto"/>
    <div className="card-body">
      <h5 className="card-title">{id}.{tittle}</h5>
      <p className="card-text">{price}</p>
    </div>
  </div></div>
  )
}

export default Item