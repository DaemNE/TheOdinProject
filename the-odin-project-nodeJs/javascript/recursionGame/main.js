// 1. Sum of all numbers

function sumRange(n) {
    if (n == 1) {
        return 1
    } else {
        return n + sumRange(n - 1)
    }
}

console.log(sumRange(4))

// 2. Power function

function power(n, e) {
    if (e == 1) {
        return n
    } else {
        return n * power(n, e - 1)
    }
}

console.log(power(3, 3))

// 3. Calculate factorial

function factorial(n) {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(4))

// 4. Check all values in an array

function all(arr, cb) {

}

// 5. Product of an array

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    } else {
        return arr.shift() * productOfArray(arr)
    }
}

console.log(productOfArray([1, 2, 3, 6]))


// 6. search js object

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, item) {
    for (let key in object) {
        if (typeof object[key] === "object") {
            return contains(object[key], item)
        }

        if (object[key] === item) {
            return true;
        }
    }
    return false;
}

console.log(contains(nestedObject, "foo2"))


// 7. Parse a multidimensional array

function totalIntegers(arr) {
    if (arr.length === 0) return 0;

    let total = 0;
    let first = arr.shift()

    if (Array.isArray(first)) {
        total += totalIntegers(first)
    } else if (Number.isInteger(first)) {
        total += 1
    }

    return total + totalIntegers(arr)
}

let arr = totalIntegers([
    [
        [5], 3
    ], 0, 2, ['foo'],
    ['bar', 2, 'quux', "baaz", 5, 6],
    [4, [5, 6]]
]);
console.log(arr);

// 8. sum squares of ints in array

function sumSquares(arr) {
    if (arr.length === 0) return 0;
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            total += sumSquares(arr[i]);
        } else {
            total += arr[i] * arr[i];
        }

    }
    return total;
}
let l = [1, 2, 3, 5];
console.log(sumSquares(l))