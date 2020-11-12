import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { name } from './package.json';

let filename = 'bundle.js';
let format = 'umd';
let libName = '';

switch (process.env.MODULE_TYPE) {
  case 'iife':
    filename = 'bundle-iife.js';
    format = 'iife';
    break;
  case 'cjs':
    filename = 'bundle-cjs.js';
    format = 'cjs';
    break;
  case 'esm':
    filename = 'bundle-esm.js';
    format = 'esm';
    break;
  case 'umd':
    filename = 'bundle-umd.js';
    format = 'umd';
    libName = name;
    break;
  default:
    break;
}

export default {
  input: 'src/main.ts',
  output: {
    // dir: 'types',
    file: `dist/${filename}`,
    format,
    name: libName ? libName : undefined,
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript(),
  ],
}
