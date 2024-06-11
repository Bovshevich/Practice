"use strict";

function asyncOperation(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Operation with value: ${value}`);
            resolve(value);
        }, delay);
    });
}

function performSequentialOperations() {
    return asyncOperation(1, 1000)
        .then((result1) => {
            console.log(`First result: ${result1}`);
            return asyncOperation(2, 1000);
        })
        .then((result2) => {
            console.log(`Second result: ${result2}`);
            return asyncOperation(3, 1000);
        })
        .then((result3) => {
            console.log(`Third result: ${result3}`);
            console.log("All operations completed.");
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

performSequentialOperations();
