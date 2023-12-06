import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import builtins from 'rollup-plugin-node-builtins';
import nodeGlobal from 'rollup-plugin-node-globals';
// import copy from 'rollup-plugin-copy';

// Set if rollup is used in development/watch mode and switch variables based on that value
const isDev = process.env.ROLLUP_WATCH === 'true'
const baseDir = isDev ? 'dev/dist/' : 'dist/'
const tsconfig = isDev ? './tsconfig.dev.json' : './tsconfig.json'

const plugins = [
  builtins(),
  nodePolyfills(),
  nodeGlobal(),
  json(),
  typescript({ tsconfig, exclude: ['node_modules'] }),
  commonjs(),
  resolve({
    browser: true,
    preferBuiltins: true,
    mainFields: ['browser']
  })
]

export default [
  {
    input: `src/index.ts`,
    output: [
      {
        dir: `${baseDir}cjs`,
        format: 'cjs',
        chunkFileNames: 'chunk-[format]-[hash].js',
      },
      {
        dir: `${baseDir}es`,
        format: 'esm',
        chunkFileNames: 'chunk-[format]-[hash].js',
      }
    ],
    plugins
  },
  {
    input: 'src/cli.ts',
    output: [
      {
        dir: `${baseDir}cjs`,
        format: 'cjs',
        chunkFileNames: 'chunk-[format]-[hash].js',
      },
      {
        dir: `${baseDir}es`,
        format: 'esm',
        chunkFileNames: 'chunk-[format]-[hash].js',
      }
    ],
    plugins
  }
]
