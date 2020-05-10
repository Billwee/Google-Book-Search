import React from "react";
import "./style.css";

function Items(props) {
  return (
    <div className="media">
      <img src={props.image} className="align-self-center mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>

  )
}

export default Items;



