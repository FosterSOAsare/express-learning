const http = require("http");
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express(http.createServer());

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}...`);
});
