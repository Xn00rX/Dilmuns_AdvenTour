const express = require('express')

const router = express.Router()

const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

const activityCtrl = require('../controllers/activites')

//routes
router.get('/activity/add', activityCtrl.activity_create)
router.post('/activity/add', activityCtrl.activity_post)
router.get('/activity/index', activityCtrl.activity_index)
router.get('/activity/all', activityCtrl.activity_all)
router.get('/activity/detail', activityCtrl.activity_show)
router.get('/activity/edit', activityCtrl.activity_edit)
router.put('/activity/update', activityCtrl.activity_update)
router.get('/activity/delete', activityCtrl.activity_delete)

//export
module.exports = router
