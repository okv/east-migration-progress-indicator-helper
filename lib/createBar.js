'use strict';

const createProgressIndicator = require('./createProgressIndicator');

module.exports = (total) => {
	return createProgressIndicator({total});
};
