const { DeepEqualAssertion } = require('@cuties/assert')
const { ExecutedTestCoverage, ExecutedTestCoverageCheck } = require('./../index')

new DeepEqualAssertion(
  new ExecutedTestCoverageCheck(
    new ExecutedTestCoverage(process, './fake2/test/script-test')
  ), process
).call()
