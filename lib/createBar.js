'use strict';

const createIndicator = require('./createIndicator');
const deprecate = require('deprecate');

module.exports = (total) => {
	deprecate(
		'createBar',
		'Use `createIndicator({total})` instead of `createBar(total)`.'
	);

	return createIndicator({total});
};
