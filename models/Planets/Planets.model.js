const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

function getPlanets() {
	return planets;
}

function getAPlanet(planetId) {
	return planets.find((e, index) => index + 1 === parseInt(planetId));
}

module.exports = {
	getAPlanet,
	getPlanets,
};
