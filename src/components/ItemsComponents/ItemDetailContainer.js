import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import './Item.css';
import { useParams } from 'react-router';
import axios from 'axios';

const ItemDetailContainer = () => {
  const [itemDetails, setItemDetail] = useState ({});
  let {id} = useParams();

  useEffect(() =>{
    setTimeout(() => {
      axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setItemDetail(res.data))
    }, 2000);
  }, [id]);

  return (
    <div className='cardContainer'>
      <ItemDetail data={itemDetails}/>
    </div>
  )
}

export default ItemDetailContainer