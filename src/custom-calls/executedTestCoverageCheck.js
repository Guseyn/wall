'use strict'

const spawn = require('child_process').spawn

module.exports = (process, callback) => {
  const testCoverage = spawn('./node_modules/.bin/nyc', ['check-coverage'], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  testCoverage.on('close', (code) => {
    if (code === 0) {
      callback(null, process)
    } else {
      callback(new Error(`test coverage check failed with code ${code}`))
    }
  })
}
