import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemsComponents/ItemListContainer';
import ItemDetailContainer from './components/ItemsComponents/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi tiendita.'/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
