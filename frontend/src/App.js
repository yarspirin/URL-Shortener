import React from 'react';

import logo from './logo.svg';
import './App.css';

import Title from "./Title"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleContainer">
          <Title/>
        </div>
        <footer className="footerContainer">
          <Footer/>
        </footer>
      </header>
    </div>
  );
}

export default App;
