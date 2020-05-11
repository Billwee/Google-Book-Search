import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class SavedItems extends Component {

  makeBook = () => {
    let obj = {}

    obj.title = this.props.title
    obj.authors = this.props.authors
    obj.description = this.props.description
    obj.id = this.props.id
    obj.image = this.props.image
    obj.link = this.props.link

    this.saveBook(obj)
  }



  saveBook = bookData => {
    API.saveBook(bookData).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }


  render() {
    return (
      <div id={this.props.id} className="media mediaBox">
        <img src={this.props.image} className="align-self-center mr-3 bookImg" alt="..." />
        <div className="media-body align-self-center">
          <h5 className="mt-0">{this.props.title}</h5>
          <p className="mediaText">{this.props.description}</p>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-sm ml-2">Visit</button>
          </a>
          <button onClick={() => this.makeBook()} type="button" className="btn btn-success btn-sm ml-2">Save</button>
        </div>
      </div>

    )
  }
}

export default SavedItems;
