import http from "http";

// Method 1
http.get("http://www.google.com", function (res) {
	res.on("data", (data) => {
		console.log(data);
	});
	res.on("end", () => {
		console.log("Data received");
	});
});

// Method 2
const req = http.request("http://www.google.com", function (res) {
	res.on("data", (data) => {
		console.log(data);
	});
	res.on("end", () => {
		console.log("Data2 received");
	});
});

req.end();
