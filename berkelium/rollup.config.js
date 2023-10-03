import { wasm } from '@rollup/plugin-wasm';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    plugins: [
        wasm(),
        typescript(),
        babel({ babelHelpers: 'bundled' })
    ]
};