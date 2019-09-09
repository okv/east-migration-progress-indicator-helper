'use strict';

const createProgressIndicator = require('./createProgressIndicator');

exports.register = (registerParams) => {
	const migratorHooks = registerParams.migratorHooks;

	const addHelper = (params) => {
		const migrationParams = params.migrationParams;

		migrationParams.createProgressIndicator = createProgressIndicator;
	};

	migratorHooks.on('beforeMigrate', () => addHelper);
	migratorHooks.on('beforeRollback', () => addHelper);
};
