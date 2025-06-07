import { selectionSort } from '../../src/sort/selectionSort/sort';

describe('selectionSort', () => {
    it('should sort an unsorted array', () => {
        const input = [5, 1, 4, 2, 8];
        const result = selectionSort([...input]);
        expect(result).toEqual([1, 2, 4, 5, 8]);
    });

    it('should return the same array for an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const result = selectionSort([...input]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with all equal elements', () => {
        const input = [7, 7, 7, 7];
        const result = selectionSort([...input]);
        expect(result).toEqual([7, 7, 7, 7]);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const result = selectionSort([...input]);
        expect(result).toEqual([]);
    });

    it('should handle a single-element array', () => {
        const input = [42];
        const result = selectionSort([...input]);
        expect(result).toEqual([42]);
    });

    it('should sort a reverse sorted array', () => {
        const input = [5, 4, 3, 2, 1];
        const result = selectionSort([...input]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});