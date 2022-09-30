import React from 'react';
import './App.css';
import Logo from './componentes/logo';
import Navbar from './componentes/navbar/navbar';
import ItemList from './componentes/ItemListContainer/ItemList';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Logo />
        <ItemList  greeting={'Hi'}/>
    </div>
  );
}

export default App;
