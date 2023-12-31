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
  let activity = new Activity(req.body)

  activity.activityImage = "/uploads/" + req.file.filename

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

exports.activity_all_map = (req, res) => {
  Activity.find().then((activites) => {
    res.json({ activites })
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
      Category.find().then((categories) => {
        res.render("activity/edit", { activity, categories })
      })
    })
}

exports.activity_update = (req, res) => {
  Activity.findByIdAndUpdate(req.body.id, {
    actName: req.body.actName,
    actDesc: req.body.actDesc,
    date: req.body.date,
    time: req.body.time,
    place: req.body.place,
    Governorates: req.body.Governorates,
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

exports.activity_map = (req, res) => {
  Activity.find().then((activites) => {
    res.render("activity/map", { activites })
  })
}

exports.activity_all = (req, res) => {
  const searchActivity = req.query.searchActivity
  const queryActivity = searchActivity
    ? { actName: { $regex: searchActivity, $options: "i" } }
    : {}

  Activity.find(queryActivity)
    .populate("actName")
    .then((activites) => {
      res.render("activity/all", { activites })
    })
    .catch((err) => {
      console.log(err)
    })
}
