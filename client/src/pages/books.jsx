import React from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Items from "../components/Items";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {
  state = {
    input: "",
    books: []
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
          obj.link = element.volumeInfo.infoLink
          obj.image = element.volumeInfo.imageLinks.thumbnail

          foundBooks.push(obj)
        })
        console.log(foundBooks)
        this.setState({
          input: "",
          books: foundBooks
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
        {this.state.books.map(item => (
          <Items
            key={item.id}
            title={item.title}
            authors={item.authors}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default Books;
