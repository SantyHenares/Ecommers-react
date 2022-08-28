import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = (prop) => {
  return (
    <div>{prop.greeting}
    <ItemCount stock={10} initial={0}/></div>
  )
}

export default ItemListContainer