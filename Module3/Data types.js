"use strict";

function sumFirstAndLastDigit(number) {
    if (typeof number !== "number" || !Number.isInteger(number)) {
        throw new Error("Argument must be an integer.");
    }

    const numStr = number.toString();
    const firstDigit = parseInt(numStr[0], 10);
    const lastDigit = parseInt(numStr[numStr.length - 1], 10);
    const sum = firstDigit + lastDigit;

    console.log(`Sum of the first and last digit of ${number} is: ${sum}`);
}

sumFirstAndLastDigit(12345);
sumFirstAndLastDigit(9876);

