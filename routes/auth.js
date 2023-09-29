const router = require('express').Router()

const authCtrl = require('../controllers/auth')

//Routes
router.get('/auth/register', authCtrl.auth_register_get)
//Export Statement
module.exports = router
