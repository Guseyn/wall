'use strict'

const { AsyncObject } = require('@cuties/cutie')
const executedTestCoverageCheck = require('./custom-calls/executedTestCoverageCheck')

// Represented result is process
class ExecutedTestCoverageCheck extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedAsyncCall () {
    return executedTestCoverageCheck
  }
}

module.exports = ExecutedTestCoverageCheck
