const { DeepEqualAssertion } = require('@cuties/assert')
const { ExecutedTestCoverage } = require('./../index')

new DeepEqualAssertion(
  new ExecutedTestCoverage(process, './fake4/test/script-test'), process
).call()
