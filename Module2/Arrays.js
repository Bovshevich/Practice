"use strict";

function sumFirstHalf(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }

    const halfLength = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, halfLength);
    const sum = firstHalf.reduce((acc, num) => acc + num, 0);

    return sum;
}

console.log(sumFirstHalf([1, 2, 3, 4, 5, 6]));
console.log(sumFirstHalf([1, 2])); 
