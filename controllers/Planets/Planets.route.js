const { controllerGetPlanets, controllerGetAPlanet } = require("./Planets.controller");
const express = require("express");

const planetsRouter = express.Router();
planetsRouter.get("/planets", controllerGetPlanets);
planetsRouter.get("/planet/:planetId", controllerGetAPlanet);

module.exports = { planetsRouter };
