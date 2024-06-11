"use strict";

function repeatOperation(operation, interval) {
    if (typeof operation !== "function") {
        throw new Error("First argument must be a function.");
    }

    if (typeof interval !== "number" || interval <= 0) {
        throw new Error("Second argument must be a positive number.");
    }

    const intervalId = setInterval(operation, interval);


    return function stop() {
        clearInterval(intervalId);
    };
}


function sayHello() {
    console.log("Hello, world!");
}

const stopInterval = repeatOperation(sayHello, 1000);

setTimeout(() => {
    stopInterval();
    console.log("Interval stopped.");
}, 5000);
