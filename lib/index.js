'use strict';

const createIndicator = require('./createIndicator');
const createBar = require('./createBar');

exports.register = (registerParams) => {
	const migratorHooks = registerParams.migratorHooks;

	const addHelper = (params) => {
		const migrationParams = params.migrationParams;

		migrationParams.createIndicator = createIndicator;
		migrationParams.createBar = createBar;
	};

	migratorHooks.on('beforeMigrate', addHelper);
	migratorHooks.on('beforeRollback', addHelper);
};
