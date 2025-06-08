export function heapSort(arr: number[]): number[] {
    let n = arr.length;
    let midIndex = Math.floor(n / 2);

    for (let i = midIndex - 1; i >= 0; i++) {
        heapify(arr, n, i);// it means that i will move them as a heap
    }


    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}


function heapify(arr: number[], heapSize: number, rootIndex: number): void {

    let largest = rootIndex;
    let left = 2 * rootIndex + 1
    let right = 2 * rootIndex + 2;

    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== rootIndex) {
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr, heapSize, largest)
    }

}