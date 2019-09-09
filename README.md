# east migration progress indicator helper

[East](https://github.com/okv/east) (node.js database migration tool) which
provides migration helper to log progress.

[![Build Status](https://travis-ci.org/okv/east-migration-progress-indicator-helper.svg?branch=master)](https://travis-ci.org/okv/east-migration-progress-indicator-helper)
[![Coverage Status](https://coveralls.io/repos/github/okv/east-migration-progress-indicator-helper/badge.svg)](https://coveralls.io/github/okv/east-migration-progress-indicator-helper)
[![Npm version](https://img.shields.io/npm/v/east-migration-progress-indicator-helper.svg)](https://www.npmjs.org/package/east-migration-progress-indicator-helper)


## Installation

```sh
npm install east-migration-progress-indicator-helper
```


## Usage

Add this plugin to the `plugins` section to `.eastrc` e.g.:

```json
{
  "plugins": ["east-migration-progress-indicator-helper"]
}
```

After that `createProgressIndicator` can be used in migrations e.g.:

```js

exports.migrate = function(client, done) {
	const indicator = client.createProgressIndicator({total: 150});

	indicator.tick(5);

	setTimeout(() => {
		indicator.tick(45);
	}, 100);
	setTimeout(() => {
		indicator.tick(50);
	}, 100);
	setTimeout(() => {
		indicator.tick(50);
	}, 500);

	setTimeout(done, 1000);
};

````

indicator will be displayed as progress bar when stdout is tty:

```
Target migrations:
	2_doSomething
Migrate "2_doSomething"
[==============================] 150 / 150
Migration done
```

in case of non-tty stdout (file, etc) it will periodically log progress:

```
Target migrations:
	2_doSomething
Migrate "2_doSomething"
Progress: 5 / 150
Progress: 50 / 150
Progress: 100 / 150
Progress: 150 / 150
Migration done
```
