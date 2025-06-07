export function sortWithSwaps(arr: number[]): { arr: number[]; swaps: number } {
    let swaps: number = 0;
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swaps++;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

            }
        }

    }


    return {
        arr,
        swaps
    };
}