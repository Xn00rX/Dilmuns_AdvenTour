const User = require('../models/User')
const bcrypt = require('bcryptjs')
const salt = 10

//Load Current User Data - HTTP GET
exports.user_show_get = (req, res) => {
  // console.log(req.user)
  // console.log(req.user._id)
  User.find({ id: User._id })
    .then((user) => {
      res.render('user/detail', { user })
    })
    .catch((err) => {
      console.log(err)
    })
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
exports.user_changepass_get = (req, res) => {
  res.render('user/changepassword')
}

//Apply Password Change
exports.user_updatepassword_post = (req, res) => {
  User.setPassword(User, passwordValid)
}
