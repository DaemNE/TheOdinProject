const max = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))

// Fizzbuzz with if, else and else if statements

for (let index = 1; index < (max + 1); index++) {
    if (index % 5 == 0 && index % 3 == 0) {
        console.log("FizzBuzz")
    } else if (index % 3 == 0) {
        console.log("Fizz")
    } else if (index % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(index)
    }
}

// Fizzbuzz with ternairy operator

for (let index = 1; index < (max + 1); index++) {
    console.log(index % 5 == 0 && index % 3 == 0 ? "FizzBuzz" : index % 3 == 0 ? "Fizz" : index % 5 == 0 ? "Buzz" : index)
}

