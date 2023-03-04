const User = require('../models/User');
const Book = require('../models/Book');

getAllBooks = (req, res) => {
  
  return res.status(200).json({ success: true, data: "getAllBooks" })
}

getBookById = (req, res) => {
  
  return res.status(200).json({ success: true, data: "getBookById" })
}

editBookByID = (req, res) => {
  
  return res.status(200).json({ success: true, data: "editBookByID" })
}

deleteBook = (req, res) => {
  
  return res.status(200).json({ success: true, data: "deleteBook" })
}

addBook = (req, res) => {
  
  return res.status(200).json({ success: true, data: "addBook" })
}

module.exports = {
  getAllBooks,
  getBookById,
  editBookByID,
  deleteBook,
  addBook
}