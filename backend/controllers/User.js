const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports.registerUser = (req, res) => {
	const {
		firstName,
		lastName,
		email,
		password,
		bio,
		image,
		occupation,
		userName,
	} = req.body;
	bcrypt.hash(password, 10).then((hash) => {
		userModel
			.create({
				firstName,
				lastName,
				email,
				password: hash,
				bio,
				image,
				occupation,
				userName,
			})
			.then((data) => {
				console.log("User entered in database Successfully");
				res.status(201).send(data);
			})
			.catch((err) => {
				console.log(err);
				res.send({ error: err, msg: "User not saved. Something went wrong!" });
			});
	});
};

module.exports.loggInUser = async (req, res) => {
	try {
		const { email, password, userName } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		const token = jwt.sign({ userId: user._id }, "jwt-secret-key", {
			expiresIn: "1hr",
		});

		res.cookie("token", token);
		res.send({ user: user.userName, userId: user._id });
	} catch (error) {
		res.status(500).json({ error: "Error loggin in" });
	}
};

module.exports.getDashboard = (req, res) => {
	res.json("Success");
};

module.exports.findUser = async (req, res) => {
	console.log(req.body);
};
