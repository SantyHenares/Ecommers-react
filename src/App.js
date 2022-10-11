import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsComponents/ItemListContainer';
import ItemDetailContainer from './components/ItemsComponents/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';
import CartContextProvider from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryid" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
