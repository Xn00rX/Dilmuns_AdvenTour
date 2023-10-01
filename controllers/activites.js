const { Activity } = require('../models/Activity')
const { Category } = require('../models/Category')

//functions
exports.activity_create = (req, res) => {
  Category.find().then((categories) => {
    res.render('activity/add', { categories })
  })
}

exports.activity_post = (req, res) => {
  let activity = new Activity(req.body)
  activity.save().then(() => {
    req.body.category.forEach((category) => {
      Category.findById(category).then((category) => {
        category.activity.push(activity)
        category.save()
      })
    })
    res.redirect('/activity/index')
  })
}

exports.activity_index = (req, res) => {
  Activity.find()
    .populate('category')
    .then((activites) => {
      res.render('activity/index', { activites })
    })
}

exports.activity_all = (req, res) => {
  Activity.find().then((activites) => {
    res.render('activity/all', { activites })
  })
}

exports.activity_show = (req, res) => {
  Activity.findById(req.query.id)
    .populate('category')
    .then((activity) => {
      res.render('activity/detail', { activity })
    })
}

exports.activity_edit = (req, res) => {
  Activity.findById(req.query.id)
    .populate('category')
    .then((activity) => {
      res.render('activity/edit', { activity })
    })
}

exports.activity_update = (req, res) => {
  Activity.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect('/activity/index')
  })
}

exports.activity_delete = (req, res) => {
  Activity.findByIdAndDelete(req.query.id).then(() => {
    res.redirect('/activity/index')
  })
}
