// write a function that calculates the sum of numbers

// using a loop
function sumToNLoop(number) {
    let sum = 0;
    for (; number > 0; number--) {
        sum += number;
    };
    return sum;
};

console.log(sumToNLoop(10));

// using recursion

function sumToNRecursion(number) {

    if (number == 1) {
        return number;
    } else {
        return number += sumToNRecursion(number - 1);
    }

}
console.log(sumToNRecursion(10));


// using pythagoras' massive IQ

function sumToNPythagoras(number) {
    return (number + 1) * (number / 2);
};

console.log(sumToNPythagoras(10))

// test recursion max call stack

// works
console.log(sumToNRecursion(10422))

/* 

console.log(sumToNRecursion(10423))
Uncaught RangeError: Maximum call stack size exceededat sumToNRecursion (main.js:18:5)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
at sumToNRecursion (main.js:21:26)
*/