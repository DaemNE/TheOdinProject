// write a function that calculates the sum of numbers

// using a loop
function sumToNLoop(number) {
    let sum = 0;
    for (let i = number; i > 0; i--) {
        sum += i;
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
console.log(sumToNRecursion(10000))

/* 
Stopped working
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

// Calculate factorial of n

function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

function factorialLoop(n) {
    let total = 1;
    for (let i = n; i > 0; i--) {
        total *= i
    }
    console.log(total)
}

factorialLoop(10)
console.log(factorial(10))

//  Return n'th number in the fibonacci sequence


//  using recursion

function fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}


// calculating time taken for recursion function
let timeProcessed = new Date()
    // console.log(fibonacci(37))
    // console.log(new Date() - timeProcessed, "milliseconds")

// using a loop

function fibonacciLoop(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = b + a;
        a = b
        b = c
    }
    return b
}

// calculating time taken for loop function
let timeProcessed1 = new Date()
    // console.log(fibonacciLoop(37))
    // console.log(new Date() - timeProcessed1, "milliseconds")

// using loop is more efficient in time than recursion

// function that prints all objects of a linked list


// recursion
function printList(list) {

    console.log(list.value)

    if (list.next) {
        printList(list.next)
    }
}

// loop
function printListLoop(list) {

    while (list) {
        console.log(list.value)
        list = list.next
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list)

printListLoop(list)

// function that prints linked list in reverse order

// recursion

function printReverse(list) {

    if (list.next) {
        printReverse(list.next)
    }
    console.log(list.value)
}

// printReverse(list)

// loop

function printReverseListLoop(list) {
    let arr = []

    while (list) {
        arr.push(list.value)
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//printReverseListLoop(list)

// collatz conjecture

function collatz(n) {
    if (n === 1) {
        return 0;
    } else if (n % 2 === 0) {
        return 1 + collatz(n / 2)
    } else {
        return 1 + collatz(3 * n + 1)
    }
}

console.log(collatz(50))

let i = 1
let max = 0
let maxI = 0
while (true) {
    if (collatz(i) > max) {
        max = collatz(i)
        maxI = i
    }
    i++
    if (i == 10000000) {
        console.log(max, maxI)
        break;
    }
}