'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const assert = require('assert');

// Represented result is actual value (for further using)
class DeepStrictEqualAssertion extends AsyncObject {

  constructor(actual, expected, message) {
    super(actual, expected, message);
  }

  syncCall() {
    return (actual, expected, message) => {
      assert.deepStrictEqual(actual, expected, message);
      return actual;
    }
  }

}

module.exports = DeepStrictEqualAssertion;
