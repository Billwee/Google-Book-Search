import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav(props) {
  // Uses react component useLocation to return which page is being
  // rendered. It's used to enable the navbar to tell the user which
  // page they're currently on.
  let location = useLocation();
  let home, saved;
  if (location.pathname === "/") {
    home = "active";
    saved = "";
  } else {
    home = "";
    saved = "active";
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={"./img/logo.png"}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={`nav-item ${home}`}>
              <Link className="nav-link" to="/">
                Search
              </Link>
            </li>
            <li className={`nav-item ${saved}`}>
              <Link className="nav-link" to="/saved">
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
