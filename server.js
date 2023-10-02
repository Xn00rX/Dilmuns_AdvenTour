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
// app.use(express.static('uploads'))

//Require Multer
const multer = require('multer')

//Port configuration
const port = process.env.PORT

//NodeJS to look in a folder called 'views' for all ejs file.
app.set('view engine', 'ejs')

// Look in views folder for a file named as layout.ejs
app.use(expressLayouts)

//Passport & Session
let session = require('express-session')
let passport = require('./helper/ppConfig')

app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 36000000 }
  })
)
//Initialize passport
app.use(passport.initialize())
app.use(passport.session())

//load user info in all ejs pages
app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

//import routes
const indexRouter = require('./routes/index')
const activityRouter = require('./routes/activites')
const categoryRouter = require('./routes/categories')
const reviewRouter = require('./routes/reviews')
const bookRouter = require('./routes/book')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')

//mount route
app.use('/', indexRouter)
app.use('/', activityRouter)
app.use('/', categoryRouter)
app.use('/', reviewRouter)
app.use('/', bookRouter)
app.use('/', authRouter)
app.use('/', userRouter)

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
