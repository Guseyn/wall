const { StrictEqualAssertion } = require('@cuties/assert')
const { ReadDataByPath } = require('@cuties/fs')
const { ParsedJSON } = require('@cuties/json')
const { ExecutedTestCoverage, ExecutedTestCoverageReport, LoggedTotalCoverageByJsonSummary } = require('./../index')

new ExecutedTestCoverageReport(
  new ExecutedTestCoverage(process, './fake3/test/script-test'),
  'json-summary'
).after(
  new StrictEqualAssertion(
    new LoggedTotalCoverageByJsonSummary(
      new ParsedJSON(
        new ReadDataByPath('coverage/coverage-summary.json', { encoding: 'utf8' })
      ), (linesPct, statementsPct, functionsPct, branchesPct) => {
        return (linesPct + statementsPct + functionsPct + branchesPct) / 4
      }
    ), 'Total coverage: 100%'
  )
).call()
