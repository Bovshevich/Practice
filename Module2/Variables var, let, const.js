"use strict";

var a = 1;
var a = 2;
console.log(a);

let b = 1;
try {
    let b = 2;
} catch (e) {
    console.error(e.message);
}

const c = 1;
try {
    const c = 2;
} catch (e) {
    console.error(e.message);
}
