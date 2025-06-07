

export function bubbleSort(arr: number[] = []) {
    console.log("Buble Sort");
    const n = arr.length;
    let result: number[] = arr.slice(); // Or [...arr]
     for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) { // Only swap if left > right
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }

    return result;
}