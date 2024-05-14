const User = require("../models/User");
const bcrypt = require("bcrypt");
//https://www.youtube.com/watch?v=kAek8sGU15k
async function createAdminAccount() {
	try {
		const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
		if (!existingAdmin) {
			const newAdmin = new User({
				email: "admin@gmail.com",
				firstName: "admin",
				lastName: "admin",
				bio: "This is an admin account",
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXJGLgeX3uj6rEVlHeFa6-3yNzhgvBCLPEZDcQuWAfw&s",
				occupation: "admin",
				userName: "admin1",
				role: "admin",
				password: await bcrypt.hash("admin", 10),
			});
			await newAdmin.save();
			console.log("Admin account created successfully");
		} else {
			console.log("Admin already exist");
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = createAdminAccount;
