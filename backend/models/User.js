const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		occupation: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
		},
		role: {
			type: String,
			enum: ["visitor", "admin"],
			default: "visitor",
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
