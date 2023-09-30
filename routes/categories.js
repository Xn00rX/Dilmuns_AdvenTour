const express = require('express')

const router = express.Router()

const methodOverride = require('method-override')

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }))

const categoryCtrl = require('../controllers/categories')

//routes
router.get('/category/add', categoryCtrl.category_create)
router.post('/category/add', categoryCtrl.category_post)
router.get('/category/index', categoryCtrl.category_index)
router.get('/category/detail', categoryCtrl.category_show)
router.get('/category/edit', categoryCtrl.category_edit)
router.put('/category/update', categoryCtrl.category_update)
router.get('/category/delete', categoryCtrl.category_delete)

//export
module.exports = router
