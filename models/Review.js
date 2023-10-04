const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema(
  {
    comment: String,
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model("Review", reviewSchema)

module.exports = { Review }
