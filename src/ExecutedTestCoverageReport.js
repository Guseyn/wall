'use strict'

const { AsyncObject } = require('@cuties/cutie')
const executedTestCoverageReport = require('./custom-calls/executedTestCoverageReport')

// Represented result is process
class ExecutedTestCoverageReport extends AsyncObject {
  constructor (process, format) {
    super(process, format || 'text')
  }

  asyncCall () {
    return executedTestCoverageReport
  }
}

module.exports = ExecutedTestCoverageReport
