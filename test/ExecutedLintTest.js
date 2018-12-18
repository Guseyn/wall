const { DeepEqualAssertion } = require('@cuties/assert');
const { ExecutedLint } = require('./../index');

new DeepEqualAssertion(
  new ExecutedLint(process, './src'), process
).call()
