const assert = require('assert');
const { add } = require('../lib/index.js');

describe('worlds', () => {
  it('returns with placeholder', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});
