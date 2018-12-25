const { DeepEqualAssertion } = require('@cuties/assert')
const { ExecutedTestCoverageCheck, ExecutedTestCoverage } = require('./../index')

new DeepEqualAssertion(
  new ExecutedTestCoverageCheck(
    new ExecutedTestCoverage(process, './fake/test/script-test'), {
      'lines': 100, 'functions': 100, 'branches': 100
    }
  ), process
).call()
