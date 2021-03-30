const assert = require('assert');
const main = require('..');

describe('worlds', () => {
  it('returns with placeholder', () => {
    assert.strictEqual(main(), 'worlds');
  });
});
