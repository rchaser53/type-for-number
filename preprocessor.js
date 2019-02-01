const tsc = require('typescript')
const tsConfig = require('./tsconfig.json')

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts')) {
      tsConfig.compilerOptions.module = 'commonjs'
      tsConfig.compilerOptions.inlineSourceMap = true
      return tsc.transpile(src, tsConfig.compilerOptions, path, [])
    }
    return src
  }
}
