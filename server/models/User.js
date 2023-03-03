const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const bookModel = require('./Book');

const userModel = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  borrowed: [bookModel]
})