const Book = require("../models/Book")
const { Activity } = require("../models/Activity")
const User = require("../models/User")

const moment = require("moment")

exports.book_create_get = async (req, res) => {
  try {
    let activities = await Activity.find()
    let user = await User.find({ userId: User._id })
    res.render("book/add", { user, activities })
  } catch (error) {
    console.log(error)
  }
}

exports.book_create_post = (req, res) => {
  let book = new Book({
    bookName: req.body.bookName,
    bookNum: req.body.bookNum,
    noOfTickets: req.body.noOfTickets,
    activity: req.body.activity,
    user: req.body.userId,
  })

  book.save().then(() => {
    res.redirect("/user/detail")
  })
}

exports.book_index_get = (req, res) => {
  Book.find()
    .then((books) => {
      res.render("book/index", { books, moment })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_delete_get = (req, res) => {
  Book.findByIdAndDelete(req.query.id)
    .then(() => {
      res.redirect(req.get("referer"))
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_edit_get = (req, res) => {
  Book.findById(req.query.id)
    .then((book) => {
      res.render("book/edit", { book })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.book_edit_post = (req, res) => {
  Book.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.redirect("/user/detail")
    })
    .catch((err) => {
      console.log(err)
    })
}
