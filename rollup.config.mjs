import { wasm } from '@rollup/plugin-wasm';
import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import json from "@rollup/plugin-json";
import copy from 'rollup-plugin-copy'

const name = 'berkelium';
const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: './lib/index.ts',
    plugins: [
        wasm(),
        typescript(),
        esbuild(),
        json(),
        copy({
            targets: [
                {src: 'package.json', dest: 'dist'},
                {src: 'README.md', dest: 'dist'}
            ]
        })
    ],
    output: [
        {
            file: `dist/${name}.js`,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: `dist/${name}.mjs`,
            format: 'es',
            sourcemap: true,
        },
    ],
};