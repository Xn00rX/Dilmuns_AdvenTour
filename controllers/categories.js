const { Activity } = require("../models/Activity")
const { Category } = require("../models/Category")

//functions
exports.category_create = (req, res) => {
  res.render("category/add")
}

exports.category_post = (req, res) => {
  let categories = new Category(req.body)
  categories.profileImage = "/uploads/" + req.file.filename

  categories.save().then(() => {
    res.redirect("/category/index")
  })
}

exports.category_index = (req, res) => {
  Category.find()
    .populate("activity")
    .then((categories) => {
      res.render("category/index", { categories })
    })
}

exports.category_all = (req, res) => {
  Category.find().then((categories) => {
    res.render("category/all", { categories })
  })
}

exports.category_each_activity = (req, res) => {
  Category.findById(req.query.id)
    .populate("activity")
    .then((category) => {
      res.render("category/eachactivity", { category })
    })
}

exports.category_show = (req, res) => {
  Category.findById(req.query.id)
    .populate("activity")
    .then((category) => {
      res.render("category/detail", { category })
    })
}

exports.category_delete = (req, res) => {
  Category.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/category/index")
  })
}

exports.category_edit = (req, res) => {
  Category.findById(req.query.id).then((category) => {
    res.render("category/edit", { category })
  })
}

exports.category_update = (req, res) => {
  Category.findByIdAndUpdate(req.body.id, {
    catgName: req.body.catgName,
    catgDesc: req.body.catgDesc,
    activity: req.body.activity,
    profileImage: "/uploads/" + req.file.filename,
  }).then(() => {
    res.redirect("/category/index")
  })
}
