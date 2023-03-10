const { Schema, model } = require('mongoose');

const bookModel = new Schema({

  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  isbn: {
    type: String,
  },

  genre: 
  {
    type: String
  },

  image: {
    type: String,
  },

  publishedDate: {
    type: Date
  },

  price: {
    type: Number
  }
});

const Book = model('Book', bookModel);

module.exports = Book;