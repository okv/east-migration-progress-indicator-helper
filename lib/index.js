'use strict';

exports.register = (registerParams) => {
	const migratorHooks = registerParams.migratorHooks;

	const addHelper = (params) => {
		const migrationParams = params.migrationParams;

		migrationParams.createProgressIndicator = () => null;
	};

	migratorHooks.on('beforeMigrate', () => addHelper);
	migratorHooks.on('beforeRollback', () => addHelper);
};
