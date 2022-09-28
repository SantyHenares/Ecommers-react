import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import './Item.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [itemDetails, setItemDetail] = useState ({});
  let {id} = useParams();

  useEffect(() =>{
      axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setItemDetail(res.data))
  }, [id]);

  return (
    <div className='cardContainer'>
      <ItemDetail data={itemDetails}/>
    </div>
  )
}

export default ItemDetailContainer