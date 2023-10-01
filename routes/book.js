const express = require("express")
const router = express.Router()

const methodOverride = require("method-override")
router.use(methodOverride("_method"))

//To take the values from the body
router.use(express.urlencoded({ extended: true }))

//controllers
const bookCtrl = require("../controllers/book")

//Routes
router.get("/book/add", bookCtrl.book_create_get)
router.post("/book/add", bookCtrl.book_create_post)
router.get("/book/index", bookCtrl.book_index_get)
router.get("/book/delete", bookCtrl.book_delete_get)
router.get("/book/edit", bookCtrl.book_edit_get)
router.put("/book/edit", bookCtrl.book_edit_post)

module.exports = router
