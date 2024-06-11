"use strict";

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}


try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(5, 0));
} catch (error) {
    console.error("Error:", error.message);
}
