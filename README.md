#wall

**Wall** is a tool that includes [static analysis](https://github.com/eslint/eslint) and [test coverage](https://github.com/istanbuljs/nyc). It was mainly made for [Page](https://github.com/Guseyn/page) and based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

[![NPM Version][npm-image]][npm-url]

## Install

`npm install @cuties/wall eslint nyc`

### Init eslint

`node_modules/.bin/eslint --init`

## Test

`npm test`

## Async objects

**Async call:** [configuredTestCoverage](https://github.com/Guseyn/wall/blob/master/src/custom-calls/configuredTestCoverage.js).

### ExecutedLint

This async object represents the `process` where static analysis is executed.

```js
new ExecutedLint(process, './src').call()

```

**Async call:** [executedLint](https://github.com/Guseyn/wall/blob/master/src/custom-calls/executedLint.js).

### ExecutedTestCoverage

This async object represents the `process` where test coverage is executed.

```js
new ExecutedTestCoverage(
  process, './test-executor.js'
).call()

```

File `test-executor` contains script that runs all your tests. You can use [this library](https://github.com/Guseyn/node-test-executor) for doing such things.

**Async call:** [executedTestCoverage](https://github.com/Guseyn/wall/blob/master/src/custom-calls/executedTestCoverage.js).

### ExecutedTestCoverageCheck

This async object represents the `process` where test coverage check is executed(after running tests via `ExecutedTestCoverage`). If coverage falls below a threshold (that can be configured via `ConfiguredTestCoverage`) the `process` fails. You can configure required test coverage percentages of *lines*, *functions* and *branches* via options in params.

```js
new ExecutedTestCoverageCheck(
  new ExecutedTestCoverage(process, '/test-executor.js'),
  { lines: 100, functions: 100, branches: 100 }
).call()

```

**Async call:** [executedTestCoverageCheck](https://github.com/Guseyn/wall/blob/master/src/custom-calls/executedTestCoverageCheck.js).

### ExecutedTestCoverageReport

This async object represents the `process` where test coverage is reported (after running tests via `ExecutedTestCoverage`).

```js
new ExecutedTestCoverageReport(
  new ExecutedTestCoverage(process, '/test-executor.js')
).call()

```

**Async call:** [executedTestCoverageReport](https://github.com/Guseyn/wall/blob/master/src/custom-calls/executedTestCoverageReport.js).


## Complete example

For making your project more qualitative use following composition:

```js
const {
  ExecutedLint,
  ExecutedTestCoverage,
  ExecutedTestCoverageCheck,
  ExecutedTestCoverageReport
} = require('@cuties/wall')

new ExecutedLint(process, './src').after(
  new ExecutedTestCoverageCheck(
    new ExecutedTestCoverageReport(
      new ExecutedTestCoverage(
        process, './test-executor.js'
      )
    ), { 'lines': 100, 'functions': 100, 'branches': 100 }
  )
).call()

```

### `test-executor.js`

```js
const executor = require('test-executor');

executor('./test');

```

[npm-image]: https://img.shields.io/npm/v/@cuties/wall.svg
[npm-url]: https://npmjs.org/package/@cuties/wall
