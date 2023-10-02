import * as wasm from '@berkelium/core';

export function berkelium(x: number, y: number): number {
  return wasm.add_numbers(x, y);
}
