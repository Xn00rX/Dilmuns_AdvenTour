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

//Require Multer
const multer = require('multer')

//Port configuration
const port = process.env.PORT

//NodeJS to look in a folder called 'views' for all ejs file.
app.set('view engine', 'ejs')

// Look in views folder for a file named as layout.ejs
app.use(expressLayouts)

//import routes
const indexRouter = require('./routes/index')
const activityRouter = require('./routes/activites')
const categoryRouter = require('./routes/categories')

//mount route
app.use('/', indexRouter)
app.use('/', activityRouter)
app.use('/', categoryRouter)

//listen for requests on port

app.listen(port, () => {
  console.log(`DilmunsAT is running on port ${port}`)
})

//MongoDB Connection
mongoose
  .connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => {
    console.log('MongoDB is not connected' + err)
  })
