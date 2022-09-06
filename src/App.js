import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemsComponents/ItemListContainer';
import ItemDetailContainer from './components/ItemsComponents/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting='Bienvenido a mi tiendita.'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
