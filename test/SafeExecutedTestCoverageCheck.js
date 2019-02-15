'use strict'

const { ExecutedTestCoverageCheck } = require('./../index')

class SafeExecutedTestCoverageCheck extends ExecutedTestCoverageCheck {
  constructor (process, options) {
    super(process, options)
  }

  onErrorAndResult () {
    return process
  }

  continueAfterFail () {
    return true
  }
}

module.exports = SafeExecutedTestCoverageCheck
