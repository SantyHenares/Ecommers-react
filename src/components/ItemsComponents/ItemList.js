import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemList = () => {
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
    <div className='d-flex flex-wrap justify-content-center'>
        {items.map((item)=>{
          return (
            <div key={item.id}>
              <Link to={`/item/${item.id}`} style={{textDecoration: 'none'}}>
                <Item  title={item.title} id={item.id} price={item.price} pictureUrl={item.image}/>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default ItemList