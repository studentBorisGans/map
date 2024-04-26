import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// import Leaflet from ""
import Map from "./map.js";
// import Leaflet from "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

console.log("Index.js");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {Map}
  </React.StrictMode>
);