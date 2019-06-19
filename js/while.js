"use strict";

(function() {

    var count = 1;
    function mult() {
        return count = count * 2 ;
    }


    var start = true;
while (start) {
    if (count < 67000) {
        console.log(mult());
    }
    if (count > 67000) {
        start = false;
    }


}


    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
    var iWant = Math.floor(Math.random() * 5) + 1;

        if (allCones < iWant) {
            console.log("I can't sell you that many, I only have " + allCones);
        } else {
            allCones -= iWant;
            console.log(iWant + " cones sold... I only have " + allCones + " left.");
        }

} while (allCones > 0);

    console.log("Yay! I sold them all!")



})();

