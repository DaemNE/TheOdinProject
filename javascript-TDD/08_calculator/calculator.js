const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arrayOfNumbers) {
	let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]
  }
  return sum
};

const multiply = function(arrayOfNumbers) {
  let multiplication = 1;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    multiplication *= arrayOfNumbers[i]
  }
  return multiplication
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let result = 1;
  if (result === 0) {
    return 1;
  }
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
