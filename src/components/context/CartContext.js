import React, {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
  return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addItem = (item, quantity) => {
    const idItem = cartList.findIndex(i => i.id === item.id)

    if(idItem === -1){
      setCartList([...cartList, { ...item, cantidad: quantity}])
    } else{
      const cantidadActual = cartList[idItem].cantidad;
      cartList.splice(idItem, 1);
      setCartList([...cartList, {...item, cantidad: item.cantidad+cantidadActual}]);
    }
  }

  const removeItems = (id) => {
		setCartList(cartList.filter((item) => item.id !== id))
	}

  const clear = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider value={{cartList, addItem, removeItems, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider