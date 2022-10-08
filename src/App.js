import React from 'react';
import './App.css';
import Logo from './componentes/logo';
import Navbar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/ItemListContainer/ItemList/Contador';

function App() {

  const handleOnAdd = () => {
    console.log('Se agrego al Carrito')
  }
  
  return (
    <div className="App">
        <Navbar />
        <Logo />
        <ItemListContainer/>
        <Contador OnAdd={handleOnAdd}/>
   </div>
  );
}

export default App;
