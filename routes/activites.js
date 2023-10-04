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

const activityCtrl = require("../controllers/activites")

//routes
router.get("/activity/add", activityCtrl.activity_create)
//router.post('/activity/add', activityCtrl.activity_post)
router.get("/activity/index", activityCtrl.activity_index)
router.get("/activity/all", activityCtrl.activity_all)
router.get("/activity/allMap", activityCtrl.activity_all_map)
router.get("/activity/detail", activityCtrl.activity_show)
router.get("/activity/edit", activityCtrl.activity_edit)
//router.put('/activity/update', activityCtrl.activity_update)
router.get("/activity/delete", activityCtrl.activity_delete)

//upload and update picture new routes
router.post(
  "/activity/add",
  upload.single("activityImage"),
  activityCtrl.activity_post
)

router.post(
  "/activity/update",
  upload.single("activityImage"),
  activityCtrl.activity_update
)

router.get("/activity/map", activityCtrl.activity_map)
//export
module.exports = router
