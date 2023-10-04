const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  catgName: String,
  catgDesc: String,
  profileImage: String,
  activity: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity'
    }
  ]
})

const Category = mongoose.model('Category', categorySchema)

module.exports = { Category }
