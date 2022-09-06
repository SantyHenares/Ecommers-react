import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = (prop) => {
  return (
    <div>
    {prop.greeting}
    <ItemList /> 
    </div>
  )
}

export default ItemListContainer