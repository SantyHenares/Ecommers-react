import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import './Item.css';

const ItemDetailContainer = () => {
  const [itemDetails, setItemDetail] = useState ({});

  useEffect(() =>{
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/2')
      .then((responsive) => responsive.json())
      .then((json) => setItemDetail(json))
    }, 2000);
    
  }, []);

  return (
    <div className='cardContainer'>
      <ItemDetail data={itemDetails}/>
    </div>
  )
}

export default ItemDetailContainer