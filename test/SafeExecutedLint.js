'use strict'

const { ExecutedLint } = require('./../index')

class SafeExecutedLint extends ExecutedLint {
  constructor (process, ...files) {
    super(process, ...files)
  }

  onErrorAndResult () {
    return process
  }

  continueAfterFail () {
    return true
  }
}

module.exports = SafeExecutedLint
