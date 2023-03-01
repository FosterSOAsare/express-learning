const http = require("http");
const express = require("express");
const planetsRouter = require("./controllers/Planets/Planets.route");

const PORT = process.env.PORT || 5000;
const app = express(http.createServer());

app.use(express.json());

app.use(planetsRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
});
