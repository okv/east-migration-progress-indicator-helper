'use strict';

const tap = require('tap');
const expect = require('expect.js');
const createProgressIndicator = require('../lib/createProgressIndicator');
const ProgressBar = require('../lib/ProgressBar');

tap.mochaGlobals();

describe('createProgressIndicator', () => {
	const isTTY = process.stdout.isTTY;

	describe('with tty', () => {
		let indicator;

		before(() => {
			process.stdout.isTTY = true;
		});

		after(() => {
			process.stdout.isTTY = isTTY;
		});

		it('should be done without error', () => {
			indicator = createProgressIndicator({total: 100});
		});

		it('should create progress bar', () => {
			expect(indicator).a(ProgressBar);
		});

		it('progress bar should tick without error', () => {
			indicator.tick(100);
		});
	});
});
