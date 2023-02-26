const { getPlanets, getAPlanet } = require("../../models/Planets/Planets.model");

function controllerGetPlanets(req, res) {
	let planets = getPlanets();
	if (!planets?.length) {
		res.status(400).json({ error: true });
		return;
	}
	res.status(200).json(planets);
}

function controllerGetAPlanet(req, res) {
	let { planetId } = req.params;
	let planet = getAPlanet(planetId);
	if (!planet.length) {
		res.status(400).json({ error: "Planet not found" });
		return;
	}
	res.status(200).json(planet);
}

module.exports = { controllerGetPlanets, controllerGetAPlanet };
