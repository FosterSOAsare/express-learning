const EventEmitter = require("events").EventEmitter;

const celebrity = new EventEmitter();

celebrity.on("new post", (message) => {
	console.log(JSON.stringify(message));
});
process.on("exit", (code) => {
	console.log(`Process exits with code , ${code}...`);
});
celebrity.emit("new post", "I am new post");
