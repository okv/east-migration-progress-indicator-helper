'use strict';

const createProgressIndicator = require('./createProgressIndicator');
const createBar = require('./createBar');

exports.register = (registerParams) => {
	const migratorHooks = registerParams.migratorHooks;

	const addHelper = (params) => {
		const migrationParams = params.migrationParams;

		migrationParams.createProgressIndicator = createProgressIndicator;
		migrationParams.createBar = createBar;
	};

	migratorHooks.on('beforeMigrate', addHelper);
	migratorHooks.on('beforeRollback', addHelper);
};
