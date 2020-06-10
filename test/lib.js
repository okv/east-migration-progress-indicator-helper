'use strict';

const tap = require('tap');
const expect = require('expect.js');
const libModule = require('../lib');
const createIndicator = require('../lib/createIndicator');
const createBar = require('../lib/createBar');

tap.mochaGlobals();

describe('lib', () => {
	describe('module', () => {
		it('should export register function', () => {
			expect(libModule.register).a(Function);
		});

		it('should export funct which accepts single arg', () => {
			expect(libModule.register.length).equal(1);
		});
	});

	describe('register function', () => {
		const hookActionHandlersMap = {};
		let migratorHooks;

		before(() => {
			migratorHooks = {
				on: (actionName, handler) => {
					if (hookActionHandlersMap[actionName]) {
						throw new Error(
							`Handler for action ${actionName} already provided`
						);
					}
					hookActionHandlersMap[actionName] = handler;
				}
			};
		});

		it('shoud be done without errors', () => {
			return libModule.register({migratorHooks});
		});

		it('shoud subscribe on migration hooks', () => {
			expect(hookActionHandlersMap).only.keys([
				'beforeMigrate', 'beforeRollback'
			]);
			expect(hookActionHandlersMap.beforeMigrate).a(Function);
			expect(hookActionHandlersMap.beforeRollback).a(Function);
		});

		it('beforeMigrate should expose createIndicator', () => {
			const handlerParams = {migrationParams: {}};
			hookActionHandlersMap.beforeMigrate(handlerParams);
			expect(handlerParams.migrationParams).have.keys([
				'createIndicator'
			]);
			expect(handlerParams.migrationParams.createIndicator).eql(
				createIndicator
			);
		});

		it('beforeRollback should expose createIndicator', () => {
			const handlerParams = {migrationParams: {}};
			hookActionHandlersMap.beforeRollback(handlerParams);
			expect(handlerParams.migrationParams).have.keys([
				'createIndicator'
			]);
			expect(handlerParams.migrationParams.createIndicator).eql(
				createIndicator
			);
		});

		it('beforeRollback should expose createProgressIndicator', () => {
			const handlerParams = {migrationParams: {}};
			hookActionHandlersMap.beforeRollback(handlerParams);
			expect(handlerParams.migrationParams).have.keys([
				'createProgressIndicator'
			]);
			expect(handlerParams.migrationParams.createProgressIndicator).eql(
				createIndicator
			);
		});

		it('beforeRollback should expose createBar', () => {
			const handlerParams = {migrationParams: {}};
			hookActionHandlersMap.beforeRollback(handlerParams);
			expect(handlerParams.migrationParams).have.keys([
				'createBar'
			]);
			expect(handlerParams.migrationParams.createBar).eql(
				createBar
			);
		});
	});
});
