const express = require('express')

const multer = require('multer')

//code is referanced in README

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const authCtrl = require('../controllers/auth')

//Routes
router.get('/auth/register', authCtrl.auth_register_get)
//router.post('/auth/register', authCtrl.auth_register_post)
router.get('/auth/login', authCtrl.auth_login_get)
router.post('/auth/login', authCtrl.auth_login_post)
router.get('/auth/logout', authCtrl.auth_logout_get)

//upload and update picture new routes
router.post(
  '/auth/register',
  upload.single('userImage'),
  authCtrl.auth_register_post
)

//Export Statement
module.exports = router
