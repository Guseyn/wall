'use strict'

const {
  ExecutedLint,
  ExecutedTestCoverage,
  ExecutedTestCoverageCheck,
  ExecutedTestCoverageReport,
  LoggedTotalCoverageByJsonSummary
} = require('./../index')
const DeepStrictEqualAssertion = require('./../assert/DeepStrictEqualAssertion')
const StrictEqualAssertion = require('./../assert/StrictEqualAssertion')
const SafeExecutedLint = require('./SafeExecutedLint')
const SafeExecutedTestCoverage = require('./SafeExecutedTestCoverage')
const SafeExecutedTestCoverageCheck = require('./SafeExecutedTestCoverageCheck')
const SafeExecutedTestCoverageReport = require('./SafeExecutedTestCoverageReport')

new DeepStrictEqualAssertion(
  new ExecutedLint(process, './fake/test'), process
).after(
  new DeepStrictEqualAssertion(
    new ExecutedTestCoverageReport(
      new ExecutedTestCoverageCheck(
        new ExecutedTestCoverage(
          process, './fake/test/script-test'
        ),
        { lines: 100, functions: 100, branches: 100, statements: 100 }
      ), 'json-summary'
    ), process
  ).after(
    new StrictEqualAssertion(
      new LoggedTotalCoverageByJsonSummary(
        { total: { lines: { pct: 100 }, statements: { pct: 100 }, functions: { pct: 100 }, branches: { pct: 100 } } },
        (linesPct, statementsPct, functionsPct, branchesPct) => {
          return (linesPct + statementsPct + functionsPct + branchesPct) / 4
        }
      ), 'Total coverage: 100%'
    ).after(
      new DeepStrictEqualAssertion(
        new ExecutedTestCoverageReport(process), process
      ).after(
        new DeepStrictEqualAssertion(
          new SafeExecutedLint(process, './fake'), process
        ).after(
          new DeepStrictEqualAssertion(
            new SafeExecutedTestCoverage(process, 'not-existing-script-test'),
            process
          ).after(
            new DeepStrictEqualAssertion(
              new SafeExecutedTestCoverageCheck(
                new ExecutedTestCoverage(process, './fake-broken/test/script-test')
              ), process
            ).after(
              new DeepStrictEqualAssertion(
                new SafeExecutedTestCoverageReport(
                  process, 'not-existing-format'
                ), process
              ).after(
                new ExecutedTestCoverage(process, './fake-broken/test/fixed-script-test')
              )
            )
          )
        )
      )
    )
  )
).call()

throw new Error()
