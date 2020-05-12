import React from "react";
import API from "../utils/API";
import SavedItems from "../components/SavedItems";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {
  state = {
    books: [],
  };

  // On page render it runs the function to load books from the MongoDB
  componentDidMount() {
    this.loadSavedBooks();
  }

  // This function loads the saved books from the DB and contructs
  // them into an array of objects to map through for rendering.
  loadSavedBooks = () => {
    let foundBooks = [];

    API.getBooks()
      .then((res) => {
        res.data.forEach((element) => {
          let obj = {};

          obj.id = element._id;
          obj.title = element.title;
          obj.authors = element.authors;
          obj.description = element.description;
          obj.link = element.link;
          obj.image = element.image;

          foundBooks.push(obj);
        });
        console.log(foundBooks);
        this.setState({
          books: foundBooks,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Wrapper>
        <div className="alert alert-primary text-center" role="alert">
          <h4>Saved Books</h4>
        </div>
        {this.state.books.map((item) => (
          <SavedItems
            key={item.id}
            id={item.id}
            title={item.title}
            authors={item.authors}
            description={item.description}
            link={item.link}
            image={item.image}
            loadSavedBooks={this.loadSavedBooks}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Books;
