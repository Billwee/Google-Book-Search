const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // Pulls all the books
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //Finds a book by title
  findOne: function (req, res) {
    db.Book.findOne({ title: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  /// Creates a book
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // Removes a book
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
