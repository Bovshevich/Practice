"use strict";

function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }

    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
console.log(bubbleSort([3, 0, -2, 5, 1, -1])); // [-2, -1, 0, 1, 3, 5]


