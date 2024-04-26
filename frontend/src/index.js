import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Parser from 'html-react-parser';

import Home from "public/home.html"
import App from './App.js';
// import Leaflet from ""
// import "/Users/borisgans/vsProjects/personalProjects/map/frontend/public/homePage.html"
import "./map.js";
import "./style.css";
import "./mainStyle.css";

// import Leaflet from "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

console.log("Index.js");

const nav = ReactDOM.createRoot(document.getElementById('mySidenav'));
const menuButton = ReactDOM.createRoot(document.getElementById('button'));
const root = ReactDOM.createRoot(document.getElementById('root'));
// const mainRoot = ReactDOM.createRoot(document.getElementById('mainRoot'));


function openNav() {
    // nav.style = {{"--base": width: "150px"}};
    nav.render(
      <div>
        <a onClick={closeNav} id="closebtn">&times;</a>
        <a href="#">Save Map</a>
        <a href="home.html">Library</a>
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
    {/* <MyMap/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<>{Parser(Home)}</>} />
        {/* <Route path="/reset" element={<>{Parser(Reset)}</>} /> */}
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// mainRoot.render(
//   <p>Hello from index.js</p>
// )