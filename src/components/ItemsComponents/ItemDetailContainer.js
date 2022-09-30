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
      // axios(`https://fakestoreapi.com/products/${id}`)
      // .then((res) => setItemDetail(res.data))
      const getClothes = async () => {
        const q = query(
          collection(db, 'Clothes', id)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setItemDetail(docs);
      };
      getClothes();
  }, [id]);

  return (
    <div className='cardContainer'>
      <ItemDetail data={itemDetails}/>
    </div>
  )
}

export default ItemDetailContainer