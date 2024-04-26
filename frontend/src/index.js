import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// import Leaflet from ""
import "./map.js";
import CSS from "./style.css";
// import Leaflet from "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

console.log("Index.js");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyMap/> */}
  </React.StrictMode>
);