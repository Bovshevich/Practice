"use strict";

function printLastCharacter(str) {
    if (typeof str !== "string") {
        throw new Error("Argument must be a string.");
    }

    if (str.length === 0) {
        console.log("The string is empty.");
    } else {
        console.log(str[str.length - 1]);
    }
}

printLastCharacter("Hello, World!");
printLastCharacter("JavaScript");
