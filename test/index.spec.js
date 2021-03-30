'use strict';

const assert = require('assert');
const { isVIP, getInfo } = require('../lib/index.js');

describe('functions', () => {
  describe('isVIP()', () => {
    it('should return false', async () => {
      // expect(await isVIP("fuwn"), 'to be false');
      assert.strictEqual(await isVIP("fuwn"), false);
    });
  });

  describe('getInfo()', () => {
    it('should return info as string', async () => {
      // assert.strictEqual(await getInfo("fuwn"));
      assert.strictEqual(typeof await getInfo("fuwn"), 'string');
    });
  });
});
