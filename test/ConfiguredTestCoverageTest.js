const { DeepEqualAssertion } = require('@cuties/assert')
const { ConfiguredTestCoverage, ExecutedTestCoverage } = require('./../index')

new DeepEqualAssertion(
  new ConfiguredTestCoverage(
    new ExecutedTestCoverage(
      process, './fake/test/script-test'
    ), { 'lines': 100, 'functions': 100, 'branches': 100 }
  ), process
).call()
