'use strict';

class ProgressLogger {
	constructor(params) {
		const logger = params.logger || console;
		const total = params.total;
		const logInterval = params.logInterval || 60000;
		const logItemsRatio = params.logItemsRatio || 0.1;

		this._logger = logger;
		this._total = total;
		this._current = 0;
		this._logInterval = logInterval;
		this._logItemsRatio = logItemsRatio;
	}

	_logState() {
		this._logger.log(`Progress: ${this._current} / ${this._total}`);

		this._lastLog = {date: Date.now(), state: this._current};
	}

	tick(count) {
		count = typeof count === 'undefined' || count === null ? 1 : count;
		if (count <= 0) {
			throw new Error(`Tick count must be positive, ${count} presented`);
		}

		if (this._current < this._total) {
			this._current = this._current + count;
		}

		if (
			(!this._lastLog) ||
			(this._current === this._total) ||
			(Date.now() - this._lastLog.date >= this._logInterval) ||
			((this._current - this._lastLog.state) / this._total >= this._logItemsRatio)
		) {
			this._logState();
		}
	}
}

module.exports = ProgressLogger;
