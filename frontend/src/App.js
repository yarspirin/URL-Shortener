import React from 'react';

import logo from './logo.svg';
import footer_image from './static/footer_image.png';
import './App.css';

import PongComponent from './PongComponent'
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy React + Go
        </p>
        <footer className="footerContainer">
          <Footer/>
        </footer>
      </header>
    </div>
  );
}

export default App;
