const { getPlanets, getAPlanet } = require("../../models/Planets/Planets.model");

function controllerGetPlanets(req, res) {
	res.status(200).json(getPlanets());
}

function controllerGetAPlanet(req, res) {
	let { planetId } = req.params;
	let planet = getAPlanet(planetId);
	if (!planet) {
		res.status(404).json({ error: "Planet not found" });
		return;
	}
	res.status(404).json(planet);
}

module.exports = {
	controllerGetPlanets,
	controllerGetAPlanet,
};
