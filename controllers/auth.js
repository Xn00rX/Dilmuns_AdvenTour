//API

//Require the User model
const User = require('../models/User')
const bcrypt = require('bcryptjs')
let passport = require('../helper/ppConfig')
const salt = 10

//Load register form - HTTP GET
exports.auth_register_get = (req, res) => {
  res.render('auth/register.ejs')
}

//Signup data in database - HTTP POST
exports.auth_register_post = (req, res) => {
  let user = User(req.body)
  console.log(req.body)
  let hash = bcrypt.hashSync(req.body.password, salt)
  user.password = hash
  console.log(hash)
  user
    .save()
    .then(() => {
      res.redirect('/auth/login')
    })
    .catch((err) => {
      console.log(err)
    })
}

//Load Login page - HTTP GET
exports.auth_login_get = (req, res) => {
  res.render('auth/login.ejs')
}

//To post Login Data - HTTP Post
exports.auth_login_post = passport.authenticate('local', {
  successRedirect: `/user/detail`,
  failureRedirect: 'auth/login'
})

//To Log out and invalidate a users session
exports.auth_logout_get = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('auth/login')
  })
}
