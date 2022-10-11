import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import './Item.css';
import { useParams } from 'react-router';
import { doc, getFirestore, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [itemDetails, setItemDetail] = useState ({});
  const [loading, setLoading] = useState(true);
  let {id} = useParams();

  useEffect(() =>{
      const getClothes = async () => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,"Clothes", id);
        getDoc(queryDoc).then((res) =>
          setItemDetail({id: res.id, ...res.data()})
        ).finally(() => setLoading(false));
      };
      getClothes();
  }, [id]);

  return (
    <div className='cardContainer'>
      {loading ? <Spinner/> : <ItemDetail data={itemDetails}/>}
    </div>
  )
}

export default ItemDetailContainer