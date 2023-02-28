const { getLaunches, getALaunch, postLaunch, deleteALaunch } = require("../../models/Launches/Launches.model");

function controllerGetLaunches(req, res) {
	let launches = getLaunches();
	if (!launches.length) {
		res.status(400).json({ empty: true });
		return;
	}
	res.status(200).json(launches);
}

function controllerGetALaunch(req, res) {
	let { launchId } = req.params;
	let launch = getALaunch(launchId);
	if (!launch.length) {
		res.status(400).json({ error: "Launch not found" });
		return;
	}
	res.status(200).json(launch);
}
function controllerPostLaunches(req, res) {
	let body = req.body;
	let result = postLaunch(body);
	if (result.error) {
		res.status(400).json(result.payload);
		return;
	}
	res.status(200).json(result);
}

function controllerDeleteLaunch(req, res) {
	let { launchId } = req.params;
	let response = deleteALaunch(launchId);
	if (response.error) {
		res.status(404).json(response);
		return;
	}
	res.status(200).json(response);
}

module.exports = { controllerGetLaunches, controllerGetALaunch, controllerPostLaunches, controllerDeleteLaunch };
