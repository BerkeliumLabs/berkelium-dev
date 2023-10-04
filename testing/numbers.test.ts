import * as berkelium from '../dist/cjs/berkelium';

describe('berkelium', () => {
  it('should work', () => {
    expect(berkelium.add_numbers(1, 2)).toEqual(3);
  });
});