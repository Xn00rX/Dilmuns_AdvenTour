const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema(
  {
    comment: String,
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review
