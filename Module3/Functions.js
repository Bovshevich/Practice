"use strict";

function firstNonRepeatingCharacter(str) {
    if (typeof str !== "string") {
        throw new Error("Argument must be a string.");
    }

    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("abacabad"));
console.log(firstNonRepeatingCharacter("abacabaabacaba"));
console.log(firstNonRepeatingCharacter("aabcc"));

