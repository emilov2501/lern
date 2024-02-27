'use strict';

const field = require('..');
const assert = require('assert').strict;

assert.strictEqual(field(), 'Hello from field');
console.info('field tests passed');
