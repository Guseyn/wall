'use strict'

const { ExecutedTestCoverage } = require('./../index')

class SafeExecutedTestCoverage extends ExecutedTestCoverage {
  constructor (process, file) {
    super(process, file)
  }

  onErrorAndResult () {
    return process
  }

  continueAfterFail () {
    return true
  }
}

module.exports = SafeExecutedTestCoverage
