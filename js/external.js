"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to My Site!");

var userInput = prompt("What is your favorite color?");
alert("Really? " + userInput + " " + "is my favorite color too!");

// var userAns = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
var littleMermRent= Number(prompt("How many days have you rented the little mermaid?"));
var broBearRent = (Number(prompt("How many days have you rented brother bear?")));
var hercRent = Number(prompt("How many days have you rented Hercules?"));

var userAns1 = ((littleMermRent + broBearRent + hercRent) *3);

alert("You owe: $" + userAns1.toFixed(2));
// var userAns2 = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. If you've worked for Facebook for 10 hours, Google, for 6 hours, and 4 hours for amazon, how much will you receive in payment for this week?");


// var userAns3 = prompt("Did you read those other questions back there? what's the answer to number 3?");

var userTime = Number(prompt("What time is the class at?"));
var classTime = Number(prompt("What time is your other class?"));
var classSize = Number(prompt("How many people are in the class?"));


if ((userTime === classTime) === true) {
    var userAns3 = 'You can\'t';
} else if ((classSize >= 24) === true) {
    var userAns3 = 'You can\'t';
} else {
    var userAns3 = 'You can!'
}

alert(userAns3);
// var userAns4 = prompt("Did you read those other questions back there? what's the answer to number 4?");

var premiumMem = confirm("Are you a premium member?");
var userItemNo = prompt("How many items do you have?");
var promoExp = confirm("Has the offer expired?");

alert("Customer coupon valid: " + ((!promoExp && (premiumMem || userItemNo >= 2))));


// alert("the answer to #1 is $27"  + "\n" +
//       "the answer to #2 is $$$" + "\n" +
//       "the answer to #3 is $$$$$" +"\n" +
//       "the answer to #4 is $$$$$$$$");