const { createReadStream } = require("fs");
const { parse } = require("csv-parse");
const path = require("path");
const habitablePlanets = [];

function fetchPlanets() {
	return new Promise((resolve, reject) => {
		createReadStream(path.join(__dirname, "../../3.1 kepler_data.csv"))
			.pipe(
				parse({
					comment: "#",
					columns: true,
				})
			)
			.on("data", (data) => {
				// Filtering planets
				if (data.koi_prad < 1.6 && data.koi_disposition === "CONFIRMED" && data.koi_insol < 1.11 && data.koi_insol > 0.36) {
					habitablePlanets.push(data);
				}
			})
			.on("error", (err) => reject(err))
			.on("end", () => {
				console.log(`${habitablePlanets.length} habitable planets found`);
				resolve();
			});
	});
}
function getPlanets() {
	return habitablePlanets;
}

function getAPlanet(planetId) {
	return habitablePlanets.find((e) => e.kepid === planetId);
}

module.exports = {
	getAPlanet,
	getPlanets,
	fetchPlanets,
};
