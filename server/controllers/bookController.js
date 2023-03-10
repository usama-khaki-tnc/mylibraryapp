const User = require('../models/User');
const Book = require('../models/Book');

getAllBooks = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!books) {
      return res
          .status(404)
          .json({ success: false, error: `Books not found!!` })
    }
    return res.status(200).json({ success: true, data: books })
  }).clone().catch(err => console.log(err))
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