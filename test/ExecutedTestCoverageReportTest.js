const { DeepEqualAssertion } = require('@cuties/assert')
const { ExecutedTestCoverage, ExecutedTestCoverageReport } = require('./../index')

new DeepEqualAssertion(
  new ExecutedTestCoverageReport(
    new ExecutedTestCoverage(process, './fake3/test/script-test')
  ), process
).call()
