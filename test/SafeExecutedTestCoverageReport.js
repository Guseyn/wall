'use strict'

const { ExecutedTestCoverageReport } = require('./../index')

class SafeExecutedTestCoverageReport extends ExecutedTestCoverageReport {
  constructor (process, format) {
    super(process, format)
  }

  onErrorAndResult () {
    return process
  }

  continueAfterFail () {
    return true
  }
}

module.exports = SafeExecutedTestCoverageReport
