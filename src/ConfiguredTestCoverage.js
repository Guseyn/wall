'use strict'

const { AsyncObject } = require('@cuties/cutie')
const configuredTestCoverage = require('./custom-calls/configuredTestCoverage')

// Represented result is process
class ConfiguredTestCoverage extends AsyncObject {
  constructor (process, options) {
    super(process, options)
  }

  definedAsyncCall () {
    return configuredTestCoverage
  }
}

module.exports = ConfiguredTestCoverage
