import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img src={"https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"} width="30" height="30" className="d-inline-block align-top" alt="" /> Google Books</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Search <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div >
  )
}

export default Nav;

{/* <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img src={"https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"} width="30" height="30" className="d-inline-block align-top" alt="" /> Google Books</Link>


        {props.children}
      </nav> */}