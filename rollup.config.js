import json from '@rollup/plugin-json';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import * as path from 'path';
import { name, main, module, version } from './package.json';

export default {
  input: 'src/main.ts',
  output: [{
    dir: path.parse(main).dir,
    format: 'umd',
    name,
  }, {
    dir: path.parse(module).dir,
    format: 'esm',
  // }, {
  //   dir: 'cjs',
  //   format: 'cjs',
  // }, {
  //   dir: 'iffe',
  //   format: 'iife',
  //   name: 'myRollup',
  }],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript(),
    replace({
      __buildVersion: JSON.stringify(version)
    })
  ],
}
