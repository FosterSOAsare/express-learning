const http = require("http");
const mongoose = require("mongoose");
const { fetchPlanets } = require("./models/Planets/Planets.model");
const app = require("./app");

mongoose.connect("mongodb+srv://scyrety:Asare4ster...@cluster0.e7viasv.mongodb.net/?retryWrites=true&w=majority");

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

async function startServer() {
	await fetchPlanets();
	app.listen(PORT, async () => {
		console.log(`Listening on PORT ${PORT}...`);
	});
}

startServer();
