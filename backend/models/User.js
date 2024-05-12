const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		userName: {
			type: String,
		},
		bio: {
			type: String,
		},
		image: {
			type: String,
		},
		password: {
			type: String,
		},
		occupation: {
			type: String,
		},
		email: {
			type: String,
		},
		role: {
			type: String,
			enum: ["reader", "writer", "admin"],
		},
	},
	{ timestamps: true }
);
// https://medium.com/@jaydip.vala/how-to-create-relationships-with-mongoose-4307bd4ea9a5
userSchema.virtual("threads", {
	ref: "Thread",
	localField: "_id",
	foreignField: "owner",
});

module.exports = mongoose.model("User", userSchema);
