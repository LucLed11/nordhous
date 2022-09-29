import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './componentes/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
      </header>
    </div>
  );
}

export default App;
