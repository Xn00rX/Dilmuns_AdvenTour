// import
const { Activity } = require('../models/Activity')
const { Category } = require('../models/Category')

exports.category_create = (req, res) => {
  res.render('category/add')
}

exports.category_post = (req, res) => {
  console.log(req.body)
  let categories = new Category(req.body)
  categories.save().then(() => {
    res.redirect('/category/index')
  })
}

exports.category_index = (req, res) => {
  Category.find().then((categories) => {
    res.render('category/index', { categories })
  })
}

exports.category_show = (req, res) => {
  console.log(req.query.id)
  Category.findById(req.query.id).then((category) => {
    res.render('category/detail', { category })
  })
}

exports.category_delete = (req, res) => {
  console.log(req.query.id)
  Category.findByIdAndDelete(req.query.id).then(() => {
    res.redirect('/category/index')
  })
}
