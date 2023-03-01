const express = require("express");
const { controllerGetPlanets, controllerGetAPlanet } = require("./Planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", controllerGetPlanets);
planetsRouter.get("/planet/:planetId", controllerGetAPlanet);

module.exports = planetsRouter;
