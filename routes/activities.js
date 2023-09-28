const express = require('express')

const router = express.Router()

const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

//CTRL
const activityCtrl = require('../controllers/activities')

//ROUTES
router.get('activity/add', activityCtrl.activity_create)

//EXPORT
module.exports = router
