//API

//Require the User model
const User = require('../models/User')

//
exports.auth_register_get = (req, res) => {
  res.render('auth/register.ejs')
}
