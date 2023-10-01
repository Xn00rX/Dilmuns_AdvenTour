const Review = require("../models/Review")

const moment = require("moment")

exports.review_create_get = (req, res) => {
  res.render("review/add")
}

exports.review_create_post = (req, res) => {
  let review = new Review(req.body)
  review
    .save()
    .then(() => {
      res.redirect("/review/index")
    })
    .catch((err) => {
      console.log(err)
      res.send("Please try again later")
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
      res.redirect("/review/index")
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
      res.redirect("/review/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
