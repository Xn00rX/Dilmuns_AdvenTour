const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  noOfTickets: String,
  date: Date,
  time: String,
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
