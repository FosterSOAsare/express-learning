const http = require("http");
const express = require("express");
const morgan = require("morgan");
const planetsRouter = require("./controllers/Planets/Planets.route");
const launchessRouter = require("./controllers/Launches/Launches.route");
const mongoose = require("mongoose");
const { fetchPlanets } = require("./models/Planets/Planets.model");

mongoose.connect("mongodb+srv://scyrety:Asare4ster...@cluster0.e7viasv.mongodb.net/?retryWrites=true&w=majority");

const PORT = process.env.PORT || 5000;
const app = express(http.createServer());

app.use(express.json());

app.use(morgan("tiny"));

app.use(planetsRouter);
app.use(launchessRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
	fetchPlanets();
});
