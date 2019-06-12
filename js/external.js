"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to My Site!");

var userInput = prompt("What is your favorite color?");
alert("Really? " + userInput + " " + "is my favorite color too!");

var userAns = prompt("Did you read those other questions back there? what's the answer to number 1?");
var userAns2 = prompt("Did you read those other questions back there? what's the answer to number 2?");
var userAns3 = prompt("Did you read those other questions back there? what's the answer to number 3?");
var userAns4 = prompt("Did you read those other questions back there? what's the answer to number 4?");

alert("the answer to #1 is"  + "\n" +
      "the answer to #2 is $$$" + "\n" +
      "the answer to #3 is $$$$$" +"\n" +
      "the answer to #4 is $$$$$$$$");

alert("your answers:" + "\n" +
        "answer 1: " + userAns + "\n" +
        "answer 2: " + userAns2 + "\n" +
        "answer 3: " + userAns3 + "\n" +
        "answer 4: " + userAns4 + "\n");