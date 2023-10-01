const router = require('express').Router()

const { urlencoded } = require('express')
const authCtrl = require('../controllers/auth')

router.use(urlencoded({ extended: true }))

//Routes
router.get('/auth/register', authCtrl.auth_register_get)
router.post('/auth/register', authCtrl.auth_register_post)
router.get('/auth/login', authCtrl.auth_login_get)
//Export Statement
module.exports = router
