const assert = require('assert');
const { isVIP } = require('../lib/index.js');

describe('functions', () => {
  it('should return false', async () => {
    assert.strictEqual(await isVIP("fuwn"), false);
  });
});
