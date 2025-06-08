export function heapSort(arr: number[]): number[] {
   
    let result =arr.slice();
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(result, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [result[0], result[i]] = [result[i], result[0]];
        heapify(result, i, 0);
    }
    return result;
}

function heapify(arr: number[], heapSize: number, rootIndex: number): void {
    let largest = rootIndex;
    let left = 2 * rootIndex + 1;
    let right = 2 * rootIndex + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== rootIndex) {
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr, heapSize, largest);
    }
}
