//Load express module
const express = require('express')

//Load dotenv module
require('dotenv').config()

//Load Mongoose module
const mongoose = require('mongoose')

//Load express EJS layout
const expressLayouts = require('express-ejs-layouts')

//Invoke express functionality
const app = express()

//Look for static file here (CSS/JS/Image/Video)
app.use(express.static('public'))

//Port configuration
const port = process.env.PORT

//NodeJS to look in a folder called 'views' for all ejs file.
app.set('view engine', 'ejs')

// Look in views folder for a file named as layout.ejs
app.use(expressLayouts)

//Passport
let passport = require('./helper/ppConfig')

//Initialize passport
app.use(passport.initialize())

//Routes
const authRouter = require('./routes/auth')

//Mount Router
app.use('/', authRouter)

app.listen(port, () => {
  console.log('Its working')
})

//MongooseDB
mongoose
  .connect(process.env.mongoDBURL, {
    useNewURLParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch((err) => {
    console.log('MongoDB not Connected' + err)
  })
