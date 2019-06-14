"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


    function detNegPos(userNum) {
        if (userNum < 0) {
            return (userNum + " is negative.");
        } else if (userNum >= 0) {
            return (userNum + " is positive.");
        } else {
            return "This isn't a number."
        }
    }

    function plusHundred(userNum2) {
        var userTotal = userNum2 + 100;
        if (isNaN(userTotal) === false) {
            return userTotal + " is one hundred more than " + userNum2;
        } else {
            return "Like, really, it's not a number."
        }
    }

    function isEvenOdd(userNum3) {
        if ((userNum3 % 2) === 0) {
            return userNum3 + " is even."
        } else if (isNaN(userNum3 % 2) === false) {
            return userNum3 + " is odd."
        } else {
            return "Dude, that's not a number."
        }

}

var question1 = confirm("Would you like to enter a number?");

if (question1 === true) {
    var userNumber = Number(prompt("Please enter a Number: "));
    alert(detNegPos(userNumber) + '\n' +plusHundred(userNumber) + '\n' + isEvenOdd(userNumber));
} else {
    alert("Got it, you hate numbers. Next time I guess.")
}



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Lfunction analyzeColor(color) {
// O    if (color === "red") {
// O        return "Red is the color of strawberries.";
// K    } else if (color === "blue") {
// H        return "blue is the color of the sky.";
// E    } else if (color === "cyan") {
// R        return "I don't know what else is cyan.";
// E    } else {
// !        return "I don't know that color."
//     }
// }
// console.log(analyzeColor('red'));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {

    switch (color) {
        case "red":
            return ("Red is the color of strawberries.");

        case "orange":
            return ("Orange is the color of oranges.");

        case "yellow":
            return ("Yellow is the color of squash.");

        case "green":
            return ("Green is the color of grapes.");

        case "blue":
            return ("Blue is the color of the sky.");

        case "indigo":
            return ("Indigo is the color of the kanto league.");

        case "violet":
            return ("Violet is the color of something, I don't know.");
        default:
            return "That's not a color. Stop.";



    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Choose a color: ");
alert(analyzeColor((userColor)));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNo,total) {
   var discount;
   var totalCost;
    switch (luckyNo) {
        case 1:
            discount = (.1);
            totalCost = (total - (total * discount));
            return "Your lucky number is " + luckyNo +". Your new total is $" + totalCost + "!";
        case 2:
            discount = (.25);
            totalCost = (total - (total * discount));
            return "Your lucky number is " + luckyNo +". Your new total is $" + totalCost + "!";
        case 3:
            discount = (.35);
            totalCost = (total - (total * discount));
            return "Your lucky number is " + luckyNo +". Your new total is $" + totalCost + "!";
        case 4:
            discount = (.50);
            totalCost = (total - (total * discount));
            return "Your lucky number is " + luckyNo +". Your new total is $" + totalCost + "!";
        case 5:
            discount = (1);
            totalCost = (total - (total * discount));
            return "It's free! Congrats!";
        default:
            return "Stop."
            }
    }

    // alert(calculateDiscount(4, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = Number(prompt("Please enter your total: "));
alert(calculateTotal(luckyNumber, userTotal));