"use strict";
(function() {


do {
var userNum = prompt("Choose a number between 1 and 50");
    if (userNum % 2 === 0) {
        alert(userNum + " is not a valid number. Please pick again.")
    } else if (userNum < 1 || userNum > 50) {
        alert(userNum + " is not between 1 and 50. Please pick again.")
    } else if (typeof Number(userNum) != "number") {
        alert(userNum + " is not a number. Please pick again.")
    } else {
        alert("Bingo! that's an odd number!");
        break;
    }

} while (true);
})();

