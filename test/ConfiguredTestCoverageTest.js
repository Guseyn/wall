const { DeepEqualAssertion } = require('@cuties/assert')
const { ConfiguredTestCoverage, ExecutedTestCoverage } = require('./../index')

new DeepEqualAssertion(
  new ExecutedTestCoverage(
    new ConfiguredTestCoverage(process, {
      'lines': 100, 'functions': 100, 'branches': 100
    }), './fake/test/script-test'
  ), process
).call()
