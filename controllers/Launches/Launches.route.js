const express = require("express");
const { controllerGetLaunches, controllerGetALaunch, controllerDeleteALaunch, controllerPostALaunch } = require("./Launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", controllerGetLaunches);
launchesRouter.get("/launch/:launchId", controllerGetALaunch);
launchesRouter.delete("/launch/:launchId", controllerDeleteALaunch);
launchesRouter.post("/launches", controllerPostALaunch);

module.exports = launchesRouter;
