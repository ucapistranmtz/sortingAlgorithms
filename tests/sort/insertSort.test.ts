import { insertSort } from '../../src/sort/insertSort/sort';

describe('insertSort', () => {
  it('sorts an unsorted array', () => {
    expect(insertSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('returns an already sorted array unchanged', () => {
    expect(insertSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an array with all equal elements', () => {
    expect(insertSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  it('handles an empty array', () => {
    expect(insertSort([])).toEqual([]);
  });

  it('handles a single-element array', () => {
    expect(insertSort([42])).toEqual([42]);
  });

  it('sorts a reverse sorted array', () => {
    expect(insertSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
