import React from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Items from "../components/Items";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {
  state = {
    input: "",
    books: [],
    error: false
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let foundBooks = [];

    API.searchBook(this.state.input)
      .then((res) => {
        if (!res.data.items) {
          return this.setState({
            input: "",
            error: true,
            books: []
          })
        } else {
          res.data.items.forEach((element, idx) => {
            let obj = {}

            obj.id = idx
            obj.title = element.volumeInfo.title
            obj.authors = element.volumeInfo.authors
            if (!element.volumeInfo.description) {
              obj.description = "No description available."
            } else {
              obj.description = element.volumeInfo.description
            }
            if (!element.volumeInfo.imageLinks) {
              obj.image = "https://via.placeholder.com/120x180?text=No+Image"
            } else {
              obj.image = element.volumeInfo.imageLinks.thumbnail
            }
            obj.link = element.volumeInfo.infoLink

            foundBooks.push(obj)
          })
        }
        console.log(foundBooks)
        this.setState({
          input: "",
          books: foundBooks,
          error: false
        })
      })
      .catch((err) => {
        console.log(err)
      })


  };

  render() {
    return (
      <Wrapper>
        <SearchBar
          name="input"
          value={this.state.input}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {!this.state.books.length ? (
          !this.state.error ? (
            <div className="alert alert-info mt-4" role="alert">
              <p className="mt-2 text-center">Please use the form above to search by author or title.</p>
            </div>
          ) : (<div className="alert alert-warning mt-4" role="alert">
            <p className="mt-2 text-center">No Books Found</p>
          </div>)
        ) : (
            this.state.books.map(item => (
              <Items
                key={item.id}
                id={item.id}
                title={item.title}
                authors={item.authors}
                description={item.description}
                link={item.link}
                image={item.image}
              />
            ))
          )
        }


      </Wrapper>
    )
  }
}

export default Books;
