const express = require("express")

const authController = require("../controllers/auth-controller");
const router = express()
router.post("/register",authController.register)
router.post("/login",authController.login)
router.post("/forget-passeord",authController.forgetPassword)
router.get("/forget-passeord/:token",authController.verifyForgetPassword)
router.post("/reset-password",authController.resetPassword)

module.exports = router