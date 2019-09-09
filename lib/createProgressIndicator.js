'use strict';

const ProgressBar = require('./ProgressBar');
const ProgressLogger = require('./ProgressLogger');

module.exports = (params) => {
	const total = params.total;

	let indicator;

	if (process.stdout.isTTY) {
		indicator = new ProgressBar({total});
	} else {
		indicator = new ProgressLogger({total});
	}

	return indicator;
};
