"use strict";
(function() {


do {
var userNum = prompt("Choose a number between 1 and 50");
    if (userNum % 2 === 0) {
        alert(userNum + " is not a valid number. Please pick again.")
    } else if (userNum < 1 || userNum > 50) {
        alert(userNum + " is not between 1 and 50. Please pick again.")
    } else if (isNaN(num)) {
        alert(userNum + " is not a number. Please pick again.")
    } else {
        alert("Bingo! that's an odd number!");
        break;
    }

} while (true);

    var yikes = function(skip) {
        for (var i = 1; i<50; i+=2) {
            if (i == skip) {
                console.log("Yikes! Skipping number " + skip);
                continue;
            }
            console.log("here is an odd number: " + i)
        }
    };
    yikes(27);

})();

