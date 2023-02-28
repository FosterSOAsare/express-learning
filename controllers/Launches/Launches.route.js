const express = require("express");
const { controllerGetLaunches, controllerGetALaunch, controllerPostLaunches, controllerDeleteLaunch } = require("../Launches/Launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", controllerGetLaunches);
launchesRouter.get("/launch/:launchId", controllerGetALaunch);
launchesRouter.post("/launches", controllerPostLaunches);
launchesRouter.delete("/launches/:launchId", controllerDeleteLaunch);
module.exports = { launchesRouter };
