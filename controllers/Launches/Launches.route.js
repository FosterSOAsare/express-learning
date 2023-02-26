const express = require("express");
const { controllerGetLaunches, controllerGetALaunch, controllerPostLaunches } = require("../Launches/Launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", controllerGetLaunches);
launchesRouter.get("/launch/:launchId", controllerGetALaunch);
launchesRouter.post("/launches", controllerPostLaunches);
module.exports = { launchesRouter };
