'use strict'

const { ExecutedLint } = require('./../index')

class SafeExecutedLint extends ExecutedLint {
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

module.exports = SafeExecutedLint
