const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  bookName: String,
  bookNum: String,
  noOfTickets: String,
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
