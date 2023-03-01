const mongoose = require("mongoose");

const launchesSchema = mongoose.Schema({
	name: String,
	planet: String,
	missile: String,
	isSuccessful: Boolean,
	isLaunched: Boolean,
	id: Number,
});

module.exports = mongoose.model("Launches", launchesSchema);
