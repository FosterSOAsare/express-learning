const express = require("express");
const { controllerGetPlanets } = require("./Planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", controllerGetPlanets);

module.exports = planetsRouter;
