const Activity = require("../models/Activity")
const User = require("../models/User")
const { Review } = require("../models/Review")

const moment = require("moment")

exports.review_create_get = (req, res) => {
  User.find({ userId: User._id })
    .then((user) => {
      let activityId = req.query.id
      console.log(req.query.id)
      res.render("review/add", { activityId, user })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.review_create_post = (req, res) => {
  // let review = new Review(req.body)
  // // Activity.findById(req.query.id).then()
  // review
  //   .save()
  //   .then(() => {
  //     res.redirect("/activity/detail")
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     res.send("Please try again later")
  //   })

  let review = new Review({
    comment: req.body.comment,
    activity: req.body.activityId,
    user: req.body.userId,
  })
  console.log(req.body.userId)
  review.save().then(() => {
    // res.redirect("/activity/index")
    res.redirect(`/activity/detail?id=${req.body.activityId}`)
  })
}

exports.index_get = (req, res) => {
  Review.find()
    .then((reviews) => {
      res.render("review/index", { reviews, moment })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.review_delete_get = (req, res) => {
  Review.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect(req.get("referer"))
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.review_edit_get = (req, res) => {
  Review.findById(req.query.id)
    .then((review) => {
      res.render("review/edit", { review })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.review_edit_post = (req, res) => {
  Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect(`/activity/detail?id=${req.body.activityId}`)
    })
    .catch((err) => {
      console.log(err)
    })
}
