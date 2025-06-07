export function selectionSort(arr: number[]): number[] {

    ///select the min value and swap if it find another one
    const n = arr.length;
    let result = arr.slice(); //it returns a new copy it's the same as [...arr]

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        //it search for the minimum from i to the end of the array
        for (let j = i + 1; j < n; j++) {

            if (result[j] < result[minIndex]) {
                minIndex = j;
            }

        }

        if (minIndex != i) {

            [result[i], result[minIndex]] = [result[minIndex], result[i]];
            console.log({arr});
            console.log({result});
        }

    }

    return result;
}