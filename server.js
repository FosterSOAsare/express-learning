const http = require("http");
const express = require("express");
const PORT = process.env.PORT || 5000;
const { planetsRouter } = require("./controllers/Planets/Planets.route");

const app = express(http.createServer());
app.use(planetsRouter);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
});
