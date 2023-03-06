const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
	name: String,
});

module.exports = mongoose.model("Planets", planetsSchema);
