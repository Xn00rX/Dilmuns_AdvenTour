<<<<<<< HEAD
const User = require("../models/User")
const Book = require("../models/Book")
const bcrypt = require("bcryptjs")
=======
const User = require('../models/User')
const Book = require('../models/Book')
const bcrypt = require('bcryptjs')
>>>>>>> d4fead9770e6ba12cf8460037cae60ceb18957d3
const salt = 10

//Load Current User Data - HTTP GET
exports.user_show_get = async (req, res) => {
  // console.log(req.user)
  // console.log(req.user._id)
  ////////////////////////////////
  // User.find({ id: User._id })
  //   .then((user) => {
  //     res.render('user/detail', { user })
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // User.find({ id: User._id }).then((user) => {
  //   Book.find({ book: req.body.user }) // add the condition here
  //     .then((books) => {
  //       res.render("user/detail", { user, books })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // })

  try {
<<<<<<< HEAD
    const books = await Book.find({ user: req.user._id })
      .populate("user")
      .populate("activity")
    res.render("user/detail", { books })
=======
    const books = await Book.find({ user: req.user._id }).populate('user')
    res.render('user/detail', { books })
>>>>>>> d4fead9770e6ba12cf8460037cae60ceb18957d3
  } catch (err) {
    res.send(err.message)
  }
}

//Load Edit Current User Data Form - HTTP GET
exports.user_edit_get = (req, res) => {
  User.find({ id: User._id })
    .then((user) => {
      res.render('user/edit', { user })
    })
    .catch((err) => {
      console.log(err)
    })
}

//Apply Changes - HTTP POST
exports.user_update_post = (req, res) => {
  console.log(req.body)
  console.log(req.file)

  User.findByIdAndUpdate(req.body.id, {
    userImage: '/uploads/' + req.file.filename,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.redirect('/user/detail')
    })
    .catch((err) => {
      console.log(err)
    })
}

//Load change password form
exports.user_changepass_get = async (req, res) => {
  const user = await User.findById(req.user)
  res.render('user/changepassword', { user })
}

//Apply Password Change
exports.user_updatepassword_post = async (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, salt)
<<<<<<< HEAD
  // console.log(hash)
  // console.log("Password changed successfully, please re-login", req.user)
  const user = await User.findByIdAndUpdate(req.user, { password: hash })
  // res.redirect("/")
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect("/auth/login")
  })
=======
  console.log(hash)
  console.log('Password changed successfully, please re-login', req.user)
  const user = await User.findByIdAndUpdate(req.user, { password: hash })
  res.redirect('/')
>>>>>>> d4fead9770e6ba12cf8460037cae60ceb18957d3
}
