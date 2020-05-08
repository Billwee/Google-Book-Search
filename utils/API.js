import axios from "axios";
let key = "AIzaSyBb5DH8wyu4YZRwr5JLWdoEcIhUGbCrG6Q"

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //Searches for a book via Google Books API
  searchbook: function (bookdata) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookdata}&key=${key}`)
  }
};
