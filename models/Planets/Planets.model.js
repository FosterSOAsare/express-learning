const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Pluto"];

function getPlanets() {
	return planets;
}

function getAPlanet(planetId) {
	return planets.filter((e, index) => index + 1 == planetId);
}

module.exports = { getPlanets, getAPlanet };
