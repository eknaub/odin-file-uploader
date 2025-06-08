const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authController.getHomePage);
router.get("/sign-up", authController.getSignUpForm);
router.get("/log-in", authController.getLogInForm);
router.post("/sign-up", authController.signUp);
router.post("/log-in", authController.logIn);
router.get("/log-out", authMiddleware.isAuthenticated, authController.logOut);

module.exports = router;
