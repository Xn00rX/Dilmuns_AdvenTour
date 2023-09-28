const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
  name: String,
  description: String,
  date: String,
  time: String,
  place: String,
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
})

const Activity = mongoose.model('Activity', activitySchema)

module.exports = { Activity }
