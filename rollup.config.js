import { babel } from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'cjs',
    exports: 'auto'
  },
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['package.json', '**/node_modules/**'],
      presets: [
        ['@babel/preset-env', { modules: false }]
      ]
    }),
    resolve({ browser: true }),
    terser()
  ]
}
