// Reading from a csv file
const { parse } = require("csv-parse");
const planets = [];

const fs = require("fs");
fs.createReadStream("./3.1 kepler_data.csv", "utf-8")
	.pipe(
		parse({
			comment: "#",
			columns: true,
		})
	)
	.on("data", (data) => {
		planets.push(data);
	})
	.on("end", () => {
		console.log(planets);
	})
	.on("error", (err) => {
		console.log(err);
	});
