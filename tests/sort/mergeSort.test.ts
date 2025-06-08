import { mergeSort } from '../../src/sort/mergeSort/sort';

describe('mergeSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        expect(mergeSort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('should handle an empty array', () => {
        expect(mergeSort([])).toEqual([]);
    });

    it('should handle an array with one element', () => {
        expect(mergeSort([42])).toEqual([42]);
    });

    it('should handle an already sorted array', () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle a reverse sorted array', () => {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate values', () => {
        expect(mergeSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
    });

    it('should not mutate the original array', () => {
        const arr = [4, 2, 7, 1];
        const copy = arr.slice();
        mergeSort(arr);
        expect(arr).toEqual(copy);
    });
});