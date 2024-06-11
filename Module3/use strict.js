"use strict";

function countVowels(str) {
    if (typeof str !== "string") {
        throw new Error("Argument must be a string.");
    }

    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}


console.log(countVowels("Hello, World!"));
console.log(countVowels("JavaScript"));
console.log(countVowels("XYZ"));

