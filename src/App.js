import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Scroll from '../src/componentes/Scroll/Scroll';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Cart from './componentes/CartWidget/CartWidget'
import Checkout from './componentes/Checkout/Checkout';

function App() {
  
  return (
    <div className="App">
     <NotificationProvider> 
      <CartProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} /> 
            <Route path='/cart' element={<Cart />}/> 
            <Route path='/checkout' element={<Checkout />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
   </div>
  );
}

export default App;
