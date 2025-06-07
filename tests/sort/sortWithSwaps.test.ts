import { sortWithSwaps } from '../../src/sort/bubbleSort/sortWithSwaps';

describe('sortWithSwaps', () => {
    it('should sort an unsorted array and count swaps', () => {
        const input = [5, 1, 4, 2, 8];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([1, 2, 4, 5, 8]);
        expect(swaps).toBeGreaterThan(0);
    });

    it('should return 0 swaps for an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
        expect(swaps).toBe(0);
    });

    it('should handle an array with all equal elements', () => {
        const input = [7, 7, 7, 7];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([7, 7, 7, 7]);
        expect(swaps).toBe(0);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([]);
        expect(swaps).toBe(0);
    });

    it('should handle a single-element array', () => {
        const input = [42];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([42]);
        expect(swaps).toBe(0);
    });

    it('should sort a reverse sorted array and count swaps', () => {
        const input = [5, 4, 3, 2, 1];
        const { arr, swaps } = sortWithSwaps([...input]);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
        expect(swaps).toBe(10); // Bubble sort worst case for 5 elements
    });
});