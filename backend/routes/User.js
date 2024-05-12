const router = require("express").Router();

const { saveUser, getUser } = require("../controllers/User");

router.get("/get", getUser);
router.post("/create/user", saveUser);

module.exports = router;
