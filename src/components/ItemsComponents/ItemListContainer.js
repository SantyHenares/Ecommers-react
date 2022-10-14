import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase/FirebaseConfig";

const ItemListContainer = (prop) => {
  const [items, setItem] = useState ([]);
  const { categoryid } = useParams();

  useEffect(() =>{

    if(!categoryid){
      const getClothes = async () => {
        const q = query(
          collection(db, 'Clothes')
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        
        setItem(docs);
      };
      getClothes();
        }
    else{
      const getClothes = async () => {
        const q = query(
          collection(db, 'Clothes'), where('category', '==', categoryid)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        
        setItem(docs);
      };
      getClothes();
    }

  }, [categoryid]);
  return (
    <div>
    <h1>Prendas personalizadas hechas a mano</h1>
    {categoryid === "black" ? <h3>Remeras Negras</h3> : null}
    {categoryid ==="white" ? <h3>Remeras Blancas</h3> : null}
    <ItemList items={items}/> 
    </div>
  )
}

export default ItemListContainer