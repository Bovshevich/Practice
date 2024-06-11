"use strict";

function accessUndefinedProperty(obj) {
    try {
        return obj.undefinedProperty;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error:", error.message);
            return "Error: Property is undefined";
        } else {
            throw error;
        }
    }
}


const obj = {};
console.log(accessUndefinedProperty(obj)); 
