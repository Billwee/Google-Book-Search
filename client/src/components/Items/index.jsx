import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class SavedItems extends Component {

  state = ({
    saved: "",
    disabled: false,
    saveText: "Save"
  })

  componentDidMount() {
    this.getBook(this.props.title)
  }

  makeBook = () => {
    let obj = {}

    obj.title = this.props.title
    obj.authors = this.props.authors
    obj.description = this.props.description
    obj.id = this.props.id
    obj.image = this.props.image
    obj.link = this.props.link

    this.saveBook(obj)

    this.setState({
      saveText: "Saved",
      disabled: true
    })
  }

  saveBook = bookData => {
    API.saveBook(bookData).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  getBook = id => {
    API.getBook(id).then((res) => {
      // console.log(res.data)
      if (res.data === null) {
        this.setState({
          saved: false
        })
      } else {
        return this.setState({
          saved: true
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div id={this.props.id} className="media mediaBox">
        <img src={this.props.image} className="align-self-center mr-3 bookImg" alt="..." />
        <div className="media-body align-self-center">
          <h4 className="my-0">{this.props.title}</h4>
          <p><small> - {this.props.authors}</small></p>
          <p className="mediaText">{this.props.description}</p>
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-primary btn-sm ml-2">Visit</button>
          </a>
          {(() => {
            if (this.state.saved) {
              return <button type="button" className="btn btn-success btn-sm ml-2" disabled>Saved</button>
            } else {
              return <button onClick={() => this.makeBook()} type="button" className={`btn btn-success btn-sm ml-2`} disabled={this.state.disabled}>{this.state.saveText}</button>
            }
          })()}
        </div>
      </div>

    )
  }
}

export default SavedItems;
