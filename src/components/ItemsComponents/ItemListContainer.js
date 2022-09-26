import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = (prop) => {
  const [items, setItem] = useState ([]);
  const { categoryid } = useParams();

  useEffect(() =>{

    if(!categoryid){      
      fetch('https://fakestoreapi.com/products')
      .then((responsive) => responsive.json())
      .then((json) => setItem(json))
        }
    else{
      fetch('https://fakestoreapi.com/products')
      .then((responsive) => responsive.json())
      .then((reps) => setItem(reps.filter(item => item.category === categoryid ))) 
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