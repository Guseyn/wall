'use strict'

const spawn = require('child_process').spawn

module.exports = (process, file, callback) => {
  const lint = spawn('./node_modules/.bin/eslint', [file], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  lint.on('close', (code) => {
    if (code === 0) {
      callback(null, process)
    } else {
      callback(new Error(`lint failed with code ${code}`))
    }
  })
}
