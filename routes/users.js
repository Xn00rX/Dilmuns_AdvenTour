const express = require('express')

const router = express.Router()

//Method Override
const methodOverride = require('method-override')
router.use(methodOverride('_method'))
// const { urlencoded } = require('express')
router.use(express.urlencoded({ extended: true }))

const userCtrl = require('../controllers/users')

//Import routes

router.get('/user/detail', userCtrl.user_show_get)
router.get('/user/edit', userCtrl.user_edit_get)
router.put('/user/update', userCtrl.user_update_post)
router.get('/user/changepassword', userCtrl.user_changepass_get)
router.put('/user/updatepassword', userCtrl.user_updatepassword_post)

module.exports = router
