const mongoose = require("mongoose")
const { type } = require("os")

const activitySchema = mongoose.Schema({
  actName: String,
  actDesc: String,
  date: String,
  time: String,
  place: String,
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
})

const Activity = mongoose.model("Activity", activitySchema)

module.exports = { Activity }
