import { heapSort } from '../../src/sort/heapSort/sort';

describe('heapSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        expect(heapSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('should handle an empty array', () => {
        expect(heapSort([])).toEqual([]);
    });

    it('should handle an array with one element', () => {
        expect(heapSort([42])).toEqual([42]);
    });

    it('should handle an already sorted array', () => {
        expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle a reverse sorted array', () => {
        expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate values', () => {
        expect(heapSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
    });

    it('should not mutate the original array', () => {
        const arr = [4, 2, 7, 1];
        const copy = arr.slice();
        heapSort(arr);
        expect(arr).toEqual(copy);
    });
});