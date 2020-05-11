import React from "react";
import API from "../utils/API";
import SavedItems from "../components/SavedItems";
import Wrapper from "../components/Wrapper";

class Books extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {

    let foundBooks = [];

    API.getBooks().then((res) => {

      res.data.forEach((element) => {
        let obj = {}

        obj.id = element._id
        obj.title = element.title
        obj.authors = element.authors
        obj.description = element.description
        obj.link = element.link
        obj.image = element.image

        foundBooks.push(obj)
      })
      console.log(foundBooks)
      this.setState({
        books: foundBooks
      })
    }).catch((err) => {
      console.log(err)
    })
  }



  render() {
    return (
      <Wrapper>
        {this.state.books.map(item => (
          <SavedItems
            key={item.id}
            id={item.id}
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