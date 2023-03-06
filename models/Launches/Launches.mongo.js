const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
	name: String,
	target: String,
	isSuccesful: Boolean,
	isLaunched: Boolean,
	date: Number,
	sponsors: [String],
	id: Number,
});

module.exports = mongoose.model("Launches", launchesSchema);
