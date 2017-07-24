// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js'
  , format: 'umd'
  , moduleName: 'viewportDetection'
  , sourceMap: true
  , plugins: [
    resolve()
    , babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
  , dest: 'index.js'
};