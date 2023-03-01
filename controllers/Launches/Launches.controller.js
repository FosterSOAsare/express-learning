const { getLaunches, deleteALaunch, getALaunch, storeALaunch } = require("../../models/Launches/Launches.model");

function controllerGetLaunches(req, res) {
	res.status(200).json(getLaunches());
}

function controllerGetALaunch(req, res) {
	let response = getALaunch(req.params.launchId);
	if (response.error) {
		res.status(404).json(response);
		return;
	}
	res.status(200).json(response);
}

function controllerDeleteALaunch(req, res) {
	let { launchId } = req.params;
	let response = deleteALaunch(launchId);
	if (response.error) {
		res.status(400).json(response);
		return;
	}
	res.status(201).json(response);
}

function controllerPostALaunch(req, res) {
	let data = req.body;
	let response = storeALaunch(data);
	if (response.error) {
		res.status(400).json(response);
		return;
	}
	res.status(201).json(response);
}

module.exports = {
	controllerPostALaunch,
	controllerDeleteALaunch,
	controllerGetALaunch,
	controllerGetLaunches,
};
