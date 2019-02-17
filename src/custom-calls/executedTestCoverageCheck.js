'use strict'

const spawn = require('child_process').spawn

module.exports = (process, { lines, functions, branches, statements }, callback) => {
  const testCoverage = spawn(
    './node_modules/.bin/nyc',
    ['check-coverage', '--lines', lines, '--functions', functions, '--branches', branches, '--statements', statements],
    { stdio: [process.stdin, process.stdout, process.stderr] }
  )
  testCoverage.on('close', (code) => {
    if (code === 0) {
      callback(null, process)
    } else {
      process.exit(code)
      // callback(new Error(`test check-coverage failed with code ${code}`))
    }
  })
}
