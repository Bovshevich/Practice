"use strict";

function sumOfSquares(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }

    return arr.map(num => num ** 2).reduce((acc, num) => acc + num, 0);
}

console.log(sumOfSquares([1, 2, 3, 4, 5]));
console.log(sumOfSquares([2, 3, 4]));

