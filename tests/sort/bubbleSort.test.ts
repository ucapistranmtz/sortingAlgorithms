import { bubbleSort } from '../../src/sort/bubbleSort/sort';

describe('bubbleSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    });

    it('should handle an already sorted array', () => {
        expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate values', () => {
        expect(bubbleSort([4, 2, 2, 8, 3])).toEqual([2, 2, 3, 4, 8]);
    });

    it('should handle an array with negative numbers', () => {
        expect(bubbleSort([0, -1, 5, -10, 8])).toEqual([-10, -1, 0, 5, 8]);
    });

    it('should handle an empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    it('should handle an array with one element', () => {
        expect(bubbleSort([42])).toEqual([42]);
    });
});