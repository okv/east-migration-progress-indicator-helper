'use strict';

const createProgressIndicator = require('./createProgressIndicator');
const deprecate = require('deprecate');

module.exports = (total) => {
	deprecate(
		'createBar',
		'Use `createProgressIndicator({total})` instead of `createBar(total)`.'
	);

	return createProgressIndicator({total});
};
