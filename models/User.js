const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
  userImage: {
    type: String,
  },
  Admin: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    required: true,
    minLength: [3, "Your first name should be longer than 3 characters"],
    maxLength: [70, "First name is too long"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Your last name should be longer than 3 characters"],
    maxLength: [70, "Last name is too long"],
  },
  phoneNumber: {
    type: Number,
    required: true,
    minLength: [8, "number does not exist"],
    maxLength: [30, "number does not exist"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password is weak"],
  },
})

// Verify password
userSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", userSchema)
module.exports = User
