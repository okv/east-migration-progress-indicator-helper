'use strict';

const Bar = require('progress');

class ProgressBar {
	constructor(params) {
		const total = params.total;

		this._bar = new Bar(
			'[:bar] :current / :total',
			{total, width: 30, incomplete: ' '}
		);
	}

	tick(count) {
		this._bar.tick(count);
	}
}

module.exports = ProgressBar;
