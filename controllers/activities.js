// import
const { Activity } = require('../models/Activity')
const { Category } = require('../models/Category')

exports.activity_create = (req, res) => {
  res.render('activity/add')
}
