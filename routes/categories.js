const express = require("express")

const multer = require("multer")

//code is referanced in README

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads")
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({ storage })

const router = express.Router()

const methodOverride = require("method-override")

router.use(methodOverride("_method"))

router.use(express.urlencoded({ extended: true }))

const categoryCtrl = require("../controllers/categories")

//routes
router.get("/category/add", categoryCtrl.category_create)
router.get("/category/index", categoryCtrl.category_index)
router.get("/category/all", categoryCtrl.category_all)
router.get("/category/eachactivity", categoryCtrl.category_each_activity)
router.get("/category/detail", categoryCtrl.category_show)
router.get("/category/edit", categoryCtrl.category_edit)
router.get("/category/delete", categoryCtrl.category_delete)

//upload and update picture new routes
router.post(
  "/category/add",
  upload.single("profileImage"),
  categoryCtrl.category_post
)

router.post(
  "/category/update",
  upload.single("profileImage"),
  categoryCtrl.category_update
)

//export
module.exports = router
