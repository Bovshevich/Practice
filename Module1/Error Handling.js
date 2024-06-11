"use strict";

function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("The provided value is not an integer.");
    }

    console.log("The provided value is an integer.");
}

try {
    checkInteger(10);
    checkInteger(10.5);
} catch (e) {
    console.error(e.message);
}

try {
    checkInteger("Hello");
} catch (e) {
    console.error(e.message);
}

try {
    checkInteger(42);
} catch (e) {
    console.error(e.message);
}
