'use strict'

const { AsyncObject } = require('@cuties/cutie')
const executedTestCoverageCheck = require('./custom-calls/executedTestCoverageCheck')

// Represented result is process
class ExecutedTestCoverageCheck extends AsyncObject {
  constructor (process, options) {
    super(process, options || { lines: 90, functions: 90, branches: 90, statements: 90 })
  }

  definedAsyncCall () {
    return executedTestCoverageCheck
  }
}

module.exports = ExecutedTestCoverageCheck
