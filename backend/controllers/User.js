const userModel = require("../models/User");

module.exports.saveUser = (req, res) => {
	let newUser = req.body;
	userModel
		.create(newUser)
		.then((data) => {
			console.log("User entered in database Successfully");
			res.status(201).send(data);
		})
		.catch((err) => {
			console.log(err);
			res.send({ error: err, msg: "User not saved. Something went wrong!" });
		});
};

module.exports.getUser = async (req, res) => {
	const user = await userModel.find({ userName });
	res.send(user);
};
