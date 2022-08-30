import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = (prop) => {
  return (
    <div>{prop.greeting}
    <ItemList /> 
    <ItemCount stock={10} initial={0}/>
    </div>
  )
}

export default ItemListContainer