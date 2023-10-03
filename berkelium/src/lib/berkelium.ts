import * as wasm from '../core/core_bg.wasm';

export function berkelium(x: number, y: number): number {
  return wasm.add_numbers(x, y);
}