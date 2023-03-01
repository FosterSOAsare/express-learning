let launches = [
	{
		name: "Asare Foster",
		target: "Pluto",
		isSuccessful: false,
		isLaunched: true,
		date: 1677698433103,
		id: 356782,
	},
	{
		name: "Kepler Exploration 5",
		target: "Earth",
		isSuccessful: true,
		isLaunched: true,
		date: 1263698433103,
		id: 462222,
	},
	{
		name: "Kepler Exploration 26",
		target: "Mercury",
		isSuccessful: true,
		isLaunched: false,
		id: 563332,
		date: 1263668433103,
	},
];

function getLaunches() {
	return launches;
}

function getALaunch(launchId) {
	let launch = launches.find((launch) => parseInt(launchId) === launch.id);
	if (!launch) {
		return { error: "Launch not found" };
	}
	return launch;
}

function deleteALaunch(launchId) {
	let launch = launches.find((launch) => parseInt(launchId) === launch.id);
	if (!launch) {
		return { error: "Launch not found" };
	}
	launches = launches.filter((e) => e.id !== parseInt(launchId));
	return launches;
}

function storeALaunch(data) {
	if (!data.name || !data.target || !data.missile) {
		return { error: "Please fill in all fields" };
	}
	data = { ...data, isLaunched: false, isSuccessful: false, id: generateId() };
	launches.push(data);
	return data;
}

function generateId() {
	let res = "";
	for (let i = 0; i < 6; i++) {
		res += Math.floor(Math.random() * 10);
	}
	return res;
}

module.exports = {
	getLaunches,
	deleteALaunch,
	getALaunch,
	storeALaunch,
};
