'use strict';

const createIndicator = require('./createIndicator');
const createBar = require('./createBar');

exports.register = (registerParams) => {
	const migratorHooks = registerParams.migratorHooks;

	const addHelper = (params) => {
		const migrationParams = params.migrationParams;

		migrationParams.createIndicator = createIndicator;
		// TODO: remove this fallback alias on next major release
		migrationParams.createProgressIndicator = createIndicator;
		migrationParams.createBar = createBar;
	};

	migratorHooks.on('beforeMigrate', addHelper);
	migratorHooks.on('beforeRollback', addHelper);
};
