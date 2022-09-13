import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';


const ItemList = ({items}) => {
  
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