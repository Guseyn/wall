# wall

**Wall** is a tool that includes [static analysis](https://github.com/eslint/eslint) and [test coverage](https://github.com/istanbuljs/nyc). It was mainly made for [Page](https://github.com/Guseyn/page) and based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

[![NPM Version][npm-image]][npm-url]

## Install

`npm install @cuties/wall eslint nyc`

### Init eslint

`node_modules/.bin/eslint --init`

## Test

`npm test`

## Async objects

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
  new ExecutedTestCoverage(process, '/test-executor.js'), 'json-summary'
).call()

```

**Async call:** [executedTestCoverageReport](https://github.com/Guseyn/wall/blob/master/src/custom-calls/executedTestCoverageReport.js). About format(default value is `text`) of report you can read [here](https://istanbul.js.org/docs/advanced/alternative-reporters/).

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
      ), 'json-summary'
    ), { 'lines': 100, 'functions': 100, 'branches': 100 }
  )
).call()

```

### `test-executor.js`

```js
const executor = require('test-executor');

executor('./test');

```

### [test-executor library](https://github.com/Guseyn/node-test-executor)

## Log total coverage (LoggedTotalCoverageByJsonSummary)

If you use `json-summary` in `ExecutedTestCoverageReport`, then this async object generates report into `coverage/coverage-summary.json` file. And you can log to console total coverage numbers via `LoggedTotalCoverageByJsonSummary`, `ReadDataByPath`([cutie-fs](https://github.com/Guseyn/cutie-fs)) and `ParsedJson`([cutie-json](https://github.com/Guseyn/cutie-json)):

```js
const { ReadDataByPath } = require('@cuties/fs')
const { ParsedJSON } = require('@cuties/json')
const { ExecutedTestCoverage, ExecutedTestCoverageReport, LoggedTotalCoverageByJsonSummary } = require('./../index')

new ExecutedTestCoverageReport(
  new ExecutedTestCoverage(process, './fake3/test/script-test'),
  'json-summary'
).after(
  new LoggedTotalCoverageByJsonSummary(
    new ParsedJSON(
      new ReadDataByPath('coverage/coverage-summary.json', { encoding: 'utf8' })
    ), (linesPct, statementsPct, functionsPct, branchesPct) => {
      return (linesPct + statementsPct + functionsPct + branchesPct) / 4
    }
  )
).call()

```

First argument of `LoggedTotalCoverageByJsonSummary` is json that contains coverage numbers(lines, statements, functions, branches percentages), second one is a function that calculates total number (in that case we just take average value of coverage numbers).

Output would look like:

`Total coverage: 100%`

[npm-image]: https://img.shields.io/npm/v/@cuties/wall.svg
[npm-url]: https://npmjs.org/package/@cuties/wall
