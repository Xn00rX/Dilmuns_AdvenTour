const express = require("express")
const router = express.Router()

router.use(express.urlencoded({ extended: true }))

const authCtrl = require("../controllers/auth")

//Routes
router.get("/auth/register", authCtrl.auth_register_get)
router.post("/auth/register", authCtrl.auth_register_post)
router.get("/auth/login", authCtrl.auth_login_get)
router.post("/auth/login", authCtrl.auth_login_post)
router.get("/auth/logout", authCtrl.auth_logout_get)
//Export Statement
module.exports = router
