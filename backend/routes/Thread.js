const router = require("express").Router();
const {
	getThreads,
	saveThread,
	deleteThread,
	updateThread,
} = require("../controllers/Thread");

router.get("/get", getThreads);

router.post("/save", saveThread);

router.put("/updated/:id", deleteThread);

router.delete("/delete/:id", updateThread);

module.exports = router;
