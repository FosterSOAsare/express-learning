const http = require("http");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const { planetsRouter } = require("./controllers/Planets/Planets.route");
const { laiunchesRouter, launchesRouter } = require("./controllers/Launches/Launches.route");

const app = express(http.createServer());

// app.use(cors);
app.use(express.json());
app.use(planetsRouter);
app.use(launchesRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
});
