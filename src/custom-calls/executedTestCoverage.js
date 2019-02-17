'use strict'

const spawn = require('child_process').spawn

module.exports = (process, testFile, callback) => {
  const testCoverage = spawn('./node_modules/.bin/nyc', ['node', testFile], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  testCoverage.on('close', (code) => {
    if (code === 0) {
      callback(null, process)
    } else {
      process.exit(code)
      // callback(new Error(`test coverage failed with code ${code}`))
    }
  })
}
