"use strict";

function callAfterDelay(callback) {
    if (typeof callback !== "function") {
        throw new Error("Argument must be a function.");
    }

    setTimeout(() => {
        callback();
    }, 2000);
}


function myCallback() {
    console.log("Callback function called after 2 seconds.");
}

callAfterDelay(myCallback);
