import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

const url = window.location.href;
const splitResult = url.split("/");
const shortLink = splitResult[3];

if (shortLink !== "") {

    axios.get("api/go/" + shortLink)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log("Error redirecting.");
        });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
