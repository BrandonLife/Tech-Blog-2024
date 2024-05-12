const threadModel = require("../models/Thread");

module.exports.getThreads = async (req, res) => {
	const threads = await threadModel.find();
	res.send(threads);
};
module.exports.saveThread = (req, res) => {
	let newThread = req.body;
	threadModel
		.create(newThread)
		.then((data) => {
			console.log("Thread saved Successfully");
			res.status(201).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "Thread not saved. Something went wrong!" });
		});
};

module.exports.deleteThread = (req, res) => {
	const { id } = req.params;
	threadModel
		.findByIdAndDelete(id)
		.then(() => res.send("Thread deleted successfully"))
		.catch((err) => {
			console.log(err);
			res.send({
				error: err,
				msg: "Something went wrong, could not delete thread",
			});
		});
};

module.exports.updateThread = (req, res) => {
	const { id } = req.params;
	const { thread } = req.body;
	threadModel
		.findByIdAndUpdate(id, { thread })
		.then(() => res.send(" Thread updated Successfully"))
		.catch((err) => {
			console.log(err);
			res.send({
				error: err,
				msg: "Something went wrong, thread not updated!",
			});
		});
};
