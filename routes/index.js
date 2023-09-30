const express = require('express')

const router = express.Router()

//CTRL
const indexCtrl = require('../controllers/index')

//Routes
router.get('/', indexCtrl.index_get)

//Export
module.exports = router
