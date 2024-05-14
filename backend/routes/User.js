const router = require("express").Router();
const jwt = require("jsonwebtoken");

const {
	registerUser,
	loggInUser,
	getDashboard,
	findUser,
} = require("../controllers/User");

router.post("/login", loggInUser);
router.post("/register", registerUser);
router.get("/dashboard", getDashboard);
router.get("/getUser", findUser);

module.exports = router;
