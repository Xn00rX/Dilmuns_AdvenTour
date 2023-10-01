const Book = require("../models/Book")

const moment = require("moment")

exports.book_create_get = (req, res) => {
  res.render("book/add")
}

exports.book_create_post = (req, res) => {
  let book = new Book(req.body)
  book
    .save()
    .then(() => {
      res.redirect("/book/index")
    })
    .catch((err) => {
      console.log(err)
      res.send("Please try again later")
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
      res.redirect("/book/index")
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
      res.redirect("/book/index")
    })
    .catch((err) => {
      console.log(err)
    })
}
