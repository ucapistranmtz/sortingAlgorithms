export function mergeSort(arr: number[]): number[] {
    let result = arr.slice();

    if (result.length <= 1)
        return result;

    const n = result.length;
    const mid = Math.floor(n / 2);
    const left = mergeSort(result.slice(0, mid));
    const right = mergeSort(result.slice(mid));

    result = merge(left, right)


    return result;
}


function merge(left: number[], right: number[]) {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }


    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}