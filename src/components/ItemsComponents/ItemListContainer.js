import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";

const ItemListContainer = (prop) => {
  const [items, setItem] = useState ([]);
  const { categoryid } = useParams();

  useEffect(() =>{

    if(!categoryid){      
      // fetch('https://fakestoreapi.com/products')
      // .then((responsive) => responsive.json())
      // .then((json) => setItem(json))
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
      // fetch('https://fakestoreapi.com/products')
      // .then((responsive) => responsive.json())
      // .then((reps) => setItem(reps.filter(item => item.category === categoryid ))) 
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
    {prop.greeting}
    <ItemList items={items}/> 
    </div>
  )
}

export default ItemListContainer