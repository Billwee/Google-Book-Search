import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class SavedItems extends Component {
  // Delete function for removing books from the DB.
  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => {
        this.props.loadSavedBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div id={this.props.id} className="media mediaBox">
        <img
          src={this.props.image}
          className="align-self-center mr-3 bookImg"
          alt="..."
        />
        <div className="media-body align-self-center">
          <h4 className="my-0">{this.props.title}</h4>
          <p>
            <small> - {this.props.authors}</small>
          </p>
          <p className="mediaText">{this.props.description}</p>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-sm ml-2">
              Visit
            </button>
          </a>
          <button
            onClick={() => this.deleteBook(this.props.id)}
            type="button"
            className="btn btn-secondary btn-sm ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SavedItems;
