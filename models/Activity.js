const mongoose = require("mongoose")
const { type } = require("os")

const activitySchema = mongoose.Schema({
  actName: String,
  actDesc: String,
  date: String,
  time: String,
  place: String,
  activityImage: String,
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
})

const Activity = mongoose.model("Activity", activitySchema)

module.exports = { Activity }
