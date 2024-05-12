const mongoose = require("mongoose");
const date = new Date();
// https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// This arrangement can be altered based on how we want the date's format to appear.
let currentTimestamp = `Thread made at ${time} on ${month}-${day}-${year}`;
console.log(currentTimestamp); // "17-6-2022"

const threadSchema = new mongoose.Schema({
	title: String, // String is shorthand for {type: String}
	author: String,
	body: String,
	comments: [{ type: String, date: currentTimestamp }],
	date: { type: Date, default: date.now },
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

module.exports = mongoose.model("Thread", threadSchema);
