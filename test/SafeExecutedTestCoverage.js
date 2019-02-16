'use strict'

const { ExecutedTestCoverage } = require('./../index')

class SafeExecutedTestCoverage extends ExecutedTestCoverage {
  constructor (process, files) {
    super(process, files)
  }

  onErrorAndResult () {
    return process
  }

  continueAfterFail () {
    return true
  }
}

module.exports = SafeExecutedTestCoverage
