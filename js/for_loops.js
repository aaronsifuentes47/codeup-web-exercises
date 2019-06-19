"use strict";


function showMultiplicationTable(num) {
    for (var go = 0;go < 11; go++) {
    var prod = num * go;
    console.log(num + " x " + go + " = " + prod);
    }
}
showMultiplicationTable(7);

function isEven(num) {
    if (typeof num === "boolean") {
        num = NaN;
    }
    return Number(num) % 2 === 0;
}


for (var numI = 0; numI < 11; numI++) {
    var num = Math.floor(Math.random() * 200) + 20;
    if (isEven(num) === true) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

for (var stringI = 1; stringI <= 10; stringI++) {
    var k = "";
    for (var j = 1; j <= stringI; j++) {
        k = k + stringI;
    } console.log(k)
}

for (var hund = 100; hund >= 5; hund -= 5) {
    console.log(hund);
}
