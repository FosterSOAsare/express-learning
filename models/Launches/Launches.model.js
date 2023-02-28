let launches = [
	{
		name: "Kepler Exploration -12 ",
		planet: "Mercury",
		missile: "Combian s-20",
		date: 1677449713061,
		isSuccessful: false,
		isLaunched: true,
		id: 57393,
	},
	{
		name: "Kepler Exploration -3902 ",
		planet: "Earth",
		missile: "Camon s-273",
		date: 1077449713061,
		isSuccessful: true,
		isLaunched: true,
		id: 68789,
	},
	{
		name: "Kepler52 Exploration -562 ",
		planet: "Mercury",
		missile: "Combryen s-20",
		date: 1373549713061,
		isSuccessful: false,
		isLaunched: true,
		id: 67894,
	},
	{
		name: "Kepler Exploration -12 ",
		planet: "Mercury",
		missile: "Combian s-20",
		date: 1328549713061,
		isSuccessful: false,
		isLaunched: true,
		id: 68933,
	},
	{
		name: "Kepler Exploration -12 ",
		planet: "Mercury",
		missile: "Combian s-20",
		date: 1373189713061,
		isSuccessful: false,
		isLaunched: true,
		id: 99363,
	},
];

function getLaunches() {
	return launches;
}

function getALaunch(launchId) {
	return launches.filter((e) => e.id === parseInt(launchId));
}

function postLaunch(launchData) {
	if (!launchData.name) {
		return { error: true, payload: "Please enter a valid name" };
	}
	if (!launchData.planet) {
		return { error: true, payload: "Please enter a valid planet name" };
	}
	if (!launchData.missile) {
		return { error: true, payload: "Please enter a valid missile name" };
	}

	launchData = { ...launchData, isSuccessful: false, isLaunched: false, date: new Date().getTime(), id: generateUniqueId() };
	launches.push(launchData);
	return launchData;
}

function deleteALaunch(launchId) {
	// Find launch
	let launch = launches.find((e) => e.id === parseInt(launchId));
	if (!launch) {
		return { error: true, payload: "Invalid launch id" };
	}
	// Delete launch
	launches = launches.filter((e) => e.id !== parseInt(launchId));
	return launches;
}

function generateUniqueId() {
	let id = "";
	for (let i = 0; i < 5; i++) {
		id += Math.floor(Math.random() * 10);
	}
	return parseInt(id);
}
module.exports = { getLaunches, getALaunch, postLaunch, deleteALaunch };
