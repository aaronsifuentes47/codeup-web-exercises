(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["John","April","Deborah","Marina"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The names array has " + names.length + " names");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("the first name is " + names[0]);
    console.log("the second name is " + names[1]);
    console.log("the third name is " + names[2]);
    console.log("the fourth name is " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name) {
    console.log("Their name is " + name + "!")
});

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var ofNum = [1,2,3,4,5];
    function first(array){
        console.log("element at that index 0 is " + array[0])

    }
    function second(array){
        console.log("element at that index 1 is " + array[1])

    }
    function fifth(array){
        console.log("element at that index 4 is " + array[array.length - 1])

    }

console.log(first(ofNum));
console.log(second(ofNum));
console.log(fifth(ofNum));

})();
