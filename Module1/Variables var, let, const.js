"use strict";

function testScope() {
    // var вне блока
    var x = "var outside block";


    {
        var x = "var inside block";
        let y = "let inside block";
        const z = "const inside block";

        // Доступ внутри блока
        console.log("Inside block:");
        console.log("var x:", x);
        console.log("let y:", y);
        console.log("const z:", z);
    }


    console.log("Outside block:");
    console.log("var x:", x); // "var inside block" - из-за переопределения
    try {
        console.log("let y:", y); // Ошибка
    } catch (e) {
        console.log("let y: Error -", e.message);
    }
    try {
        console.log("const z:", z); // Ошибка
    } catch (e) {
        console.log("const z: Error -", e.message);
    }
}


testScope();
