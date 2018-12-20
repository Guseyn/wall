const { DeepEqualAssertion } = require('@cuties/assert')
const { ExecutedLint } = require('./../index')

new DeepEqualAssertion(
  new ExecutedLint(process, './src'), process
).after(
  new DeepEqualAssertion(
    new ExecutedLint(process, './test'), process
  )
).call()
