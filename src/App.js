import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} /> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
