import React from 'react';

import logo from './logo.svg';
import './App.css';

import Title from "./Title"
import Footer from "./Footer";
import ShortenTextField from "./ShortenTextField";
import ShortenButton from "./ShortenButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleContainer">
          <Title/>
        </div>
        <div className="textFieldContainer">
          <ShortenTextField/>
        </div>
        <div className="buttonContainer">
          <ShortenButton/>
        </div>
        <footer className="footerContainer">
          <Footer/>
        </footer>
      </header>
    </div>
  );
}

export default App;
