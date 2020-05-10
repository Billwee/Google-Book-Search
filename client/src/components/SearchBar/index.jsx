import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form className="form-inline justify-content-center">
      <input onChange={props.handleInputChange} value={props.value} name={props.name} type="text" className="form-control mr-2 col-md-6" id="searchInput" placeholder="Search Books Here..." />
      <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
    </form>
  )
}

export default SearchBar;