const express = require("express")
const router = express.Router()

const methodOverride = require("method-override")
router.use(methodOverride("_method"))

//To take the values from the body
router.use(express.urlencoded({ extended: true }))

//controllers
const reviewCtrl = require("../controllers/reviews")

//Routes
router.get("/review/add", reviewCtrl.review_create_get)
router.post("/review/add", reviewCtrl.review_create_post)
router.get("/review/index", reviewCtrl.index_get)
router.get("/review/delete", reviewCtrl.review_delete_get)
router.get("/review/edit", reviewCtrl.review_edit_get)
router.put("/review/edit", reviewCtrl.review_edit_post)

module.exports = router
