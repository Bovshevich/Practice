"use strict";

function increaseByTenPercent(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Argument must be an array.");
    }

    return numbers.map(number => {
        if (typeof number !== "number") {
            throw new Error("Array must contain only numbers.");
        }
        return number * 1.10;
    });
}

let nums = [10, 20, 30, 40];
let increasedNums = increaseByTenPercent(nums);
console.log(increasedNums); 
