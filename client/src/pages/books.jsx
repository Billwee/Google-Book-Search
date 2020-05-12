import React from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import Items from "../components/Items";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {
  state = {
    input: "",
    books: [],
    error: false,
  };

  // Saves input value to state
  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  // This function makesa a get request to google books API and if no results
  // are found it sets the error boolean to true which is used in a conditional
  // in the render below to show an "no books found" message. Otherwise it
  // takes the response, loops through it, and adds info from each book into
  // and empty object. That object is pushed into an an array that is mapped
  // through to render the individual book media object on the page. It also
  // checks for empty values in the images and descriptions and inserts
  // placeholders if needed.
  handleFormSubmit = (event) => {
    event.preventDefault();
    let foundBooks = [];

    API.searchBook(this.state.input)
      .then((res) => {
        if (!res.data.items) {
          return this.setState({
            input: "",
            error: true,
            books: [],
          });
        } else {
          res.data.items.forEach((element, idx) => {
            let obj = {};

            obj.id = idx;
            obj.title = element.volumeInfo.title;
            obj.authors = element.volumeInfo.authors;
            if (!element.volumeInfo.description) {
              obj.description = "No description available.";
            } else {
              obj.description = element.volumeInfo.description;
            }
            if (!element.volumeInfo.imageLinks) {
              obj.image = "https://via.placeholder.com/120x180?text=No+Image";
            } else {
              obj.image = element.volumeInfo.imageLinks.thumbnail;
            }
            obj.link = element.volumeInfo.infoLink;

            foundBooks.push(obj);
          });
        }
        console.log(foundBooks);
        this.setState({
          input: "",
          books: foundBooks,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
              <p className="mt-2 text-center">
                Please use the form above to search by author or title.
              </p>
            </div>
          ) : (
            <div className="alert alert-warning mt-4" role="alert">
              <p className="mt-2 text-center">No Books Found</p>
            </div>
          )
        ) : (
          this.state.books.map((item) => (
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
        )}
      </Wrapper>
    );
  }
}

export default Books;
