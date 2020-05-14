import React from 'react';
import logo from './logo.svg';
import './App.css';
import PongComponent from './PongComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy React + Go
        </p>
        <PongComponent/>
      </header>
    </div>
  );
}

export default App;
