const express = require("express");

const morgan = require("morgan");
const planetsRouter = require("./controllers/Planets/Planets.route");
const launchesRouter = require("./controllers/Launches/Launches.route");

const app = express();
app.use(express.json());

app.use(morgan("tiny"));
app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app;
