import React from 'react';

import './App.css';

import Title from "./Title"
import Footer from "./Footer";
import InputAggregator from "./InputAggregator"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleContainer">
          <Title/>
        </div>
        <div className="inputContainer">
          <InputAggregator/>
        </div>
        <footer className="footerContainer">
          <Footer/>
        </footer>
      </header>
    </div>
  );
}

export default App;
