/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm,
 * and counts the number of swaps performed during the sorting process.
 *
 * @param arr - The array of numbers to be sorted. The array is sorted in-place.
 * @returns An object containing the sorted array (`arr`) and the total number of swaps (`swaps`) performed.
 *
 * @example
 * ```typescript
 * const result = sortWithSwaps([3, 1, 2]);
 * // result.arr => [1, 2, 3]
 * // result.swaps => 2
 * ```
 */
export function sortWithSwaps(arr: number[]): { arr: number[]; swaps: number } {
    let swaps: number = 0;
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swaps++;
                //
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            }
        }

    }


    return {
        arr,
        swaps
    };
}