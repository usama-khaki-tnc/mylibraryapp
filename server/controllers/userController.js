const User = require('../models/User');
const Book = require('../models/Book');

const {authMiddleware, signInToken} = require('../utils/auth')

register = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No user data provided',
    })
  }

  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

  user
    .save()
    .then((userData) => {
      
      const id = userData._id.valueOf()
      const token = signInToken(user.email, id)
      return res.status(201).json({
          success: true,
          token: token,
          message: 'User created!',
      })
    })
    .catch(error => {
        return res.status(400).json({
            success: false,
            error: 'User not created!',
        })
    })
}

login = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No user data provided',
    })
  }

  User.findOne({email: body.email}, async (err, user) => {
    if (err) {
      return res.status(404).json({
          err,
          message: 'User not found!',
      })
    }

    const correctPw = await user.isCorrectPassword(body.password);
    if (!correctPw) {
      return res.status(403).json({
        success: false,
        error: 'Incorrect password',
      })
    }
    else {
      const token = signInToken(user.email, user._id.valueOf())
      return res.status(201).json({
        success: true,
        token: token
      })
    }
  })
}

getUserById = (req, res) => {
  
  return res.status(200).json({ success: true, data: "survey" })
}

editUser = (req, res) => {
  return res.status(200).json({ success: true, data: "survey" })
}

getAllUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!users) {
      return res
          .status(404)
          .json({ success: false, error: `Users not found!!` })
    }
    return res.status(200).json({ success: true, data: users })
  }).clone().catch(err => console.log(err))
}

module.exports = {
  register,
  login,
  getUserById,
  editUser,
  getAllUsers
}