const { Activity } = require("../models/Activity")
const { Category } = require("../models/Category")
const { Review } = require("../models/Review")
const { User } = require("../models/User")

const moment = require("moment")

//functions
exports.activity_create = (req, res) => {
  Category.find().then((categories) => {
    res.render("activity/add", { categories })
  })
}

exports.activity_post = (req, res) => {
  console.log(req.body)
  console.log(req.file)

  let activity = new Activity(req.body)

  activites.activityImage = "/uploads/" + req.file.filename
  console.log("activity.activityImage")

  activity.save().then(() => {
    req.body.category.forEach((category) => {
      Category.findById(category).then((category) => {
        category.activity.push(activity)
        category.save()
      })
    })
    res.redirect("/activity/index")
  })
}

exports.activity_index = (req, res) => {
  Activity.find()
    .populate("category")
    .then((activites) => {
      res.render("activity/index", { activites })
    })
}

exports.activity_all = (req, res) => {
  Activity.find().then((activites) => {
    res.render("activity/all", { activites })
  })
}

exports.activity_show = (req, res) => {
  Activity.findById(req.query.id)
    .populate("category")
    .then((activity) => {
      Review.find({ activity: req.query.id })
        .populate("user")
        .then((reviews) => {
          res.render("activity/detail", { activity, reviews, moment })
        })
        .catch((err) => {
          console.log(err)
        })
    })
}

exports.activity_edit = (req, res) => {
  Activity.findById(req.query.id)
    .populate("category")
    .then((activity) => {
      res.render("activity/edit", { activity })
    })
}

exports.activity_update = (req, res) => {
  console.log(req.body)
  console.log(req.file)

  Activity.findByIdAndUpdate(req.body.id, {
    actName: req.body.actName,
    actDesc: req.body.actDesc,
    activityImage: "/uploads/" + req.file.filename,
  }).then(() => {
    res.redirect("/activity/index")
  })
}

exports.activity_delete = (req, res) => {
  Activity.findByIdAndDelete(req.query.id).then(() => {
    res.redirect("/activity/index")
  })
}
