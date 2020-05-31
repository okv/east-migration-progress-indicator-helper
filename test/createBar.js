'use strict';

const tap = require('tap');
const expect = require('expect.js');
const createBar = require('../lib/createBar');
const ProgressBar = require('../lib/ProgressBar');
const ProgressLogger = require('../lib/ProgressLogger');

tap.mochaGlobals();

describe('createBar', () => {
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
			indicator = createBar(100);
		});

		it('should create progress bar', () => {
			expect(indicator).a(ProgressBar);
		});

		it('progress bar should tick without error', () => {
			indicator.tick(100);
		});
	});

	describe('with not tty', () => {
		let indicator;

		before(() => {
			process.stdout.isTTY = false;
		});

		after(() => {
			process.stdout.isTTY = isTTY;
		});

		it('should be done without error', () => {
			indicator = createBar(100);
		});

		it('should create progress logger', () => {
			expect(indicator).a(ProgressLogger);
		});

		it('progress logger should tick 1 without error', () => {
			indicator.tick();
		});

		it('progress logger should tick 1 without error', () => {
			indicator.tick(1);
		});

		it('progress logger should tick 9 without error', () => {
			indicator.tick(9);
		});

		it('progress logger should tick 89 without error', () => {
			indicator.tick(89);
		});
	});
});
