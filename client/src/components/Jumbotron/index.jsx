import React from "react";
import "./style.css";

// Jumbotron for the page. Had to make the background more local
// since I had trouble loading it in the CSS from the public folder
function Jumbotron(props) {
  return (
    <div className="jumbotron mt-4">
      <img id="logo" src="./img/header.png" alt="" />
      {/* <h2 id="clickText">Google Book Search</h2>
      <h3 className="">Find and save your favorite book infomation!</h3> */}
      {props.children}
    </div>
  )
}

export default Jumbotron;