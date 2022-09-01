import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
    const [items, setItem] = useState ([]);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then((responsive) => responsive.json())
            .then((json) => setItem(json))
    }, []);
  return (
    <div className='d-flex flex-wrap justify-content-center'>
        {items.map((item)=>{
            return <Item key={item.id} title={item.title} id={item.id} price={item.price} pictureUrl={item.image}/>
        })}
    </div>
  )
}

export default ItemList