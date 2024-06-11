"use strict";

console.log(x);
var x = 10;

try {
    console.log(y);
    let y = 20;
} catch (e) {
    console.error(e.message);
}

try {
    console.log(z);
    const z = 30;
} catch (e) {
    console.error(e.message);
}
