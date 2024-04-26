import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// import Leaflet from ""
import "./map.js";
import "./style.css";
// import Leaflet from "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

console.log("Index.js");

const nav = ReactDOM.createRoot(document.getElementById('mySidenav'));
const menuButton = ReactDOM.createRoot(document.getElementById('button'));
const root = ReactDOM.createRoot(document.getElementById('root'));

function openNav() {
    // nav.style = {{"--base": width: "150px"}};
    nav.render(
      <div>
        <a onClick={closeNav} id="closebtn">&times;</a>
        <a href="#">Save Map</a>
        <a href="homePage.html">Library</a>
        <a href="#">Groups</a>
        <a href="#"></a>
      </div>
    )
    menuButton.render(
      <div></div>
    )
    // document.getElementById("button").style.visibility = "hidden";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    nav.render(
      <div></div>
    )
    menuButton.render(
      <button onClick={openNav}>
        <img id="img" src="badMenu.png"/>
      </button>
    )
    // nav.style.width = "0";
    // document.getElementById("button").style.visibility = "visible";
}

menuButton.render(
  <button onClick={openNav}>
    <img id="img" src="badMenu.png"/>

  </button>
)

root.render(
  <React.StrictMode>
    <App />
    {/* <MyMap/> */}
  </React.StrictMode>
);