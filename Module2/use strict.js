"use strict";

function containsValue(array, value) {
    if (!Array.isArray(array)) {
        throw new Error("First argument must be an array.");
    }

    return array.includes(value);
}

console.log(containsValue([1, 2, 3, 4, 5], 3));
console.log(containsValue([1, 2, 3, 4, 5], 6));
console.log(containsValue(['apple', 'banana', 'cherry'], 'banana'));
console.log(containsValue(['apple', 'banana', 'cherry'], 'grape')); 
