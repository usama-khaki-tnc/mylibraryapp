const express = require('express')

const { getAllBooks,
  getBookById,
  editBookByID,
  deleteBook,
  addBook } = require('../controllers/bookController');

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.put('/:id', editBookByID)
router.delete('/:id', deleteBook)
router.post('/', addBook)

module.exports = router