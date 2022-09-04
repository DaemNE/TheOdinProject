const palindromes = function (str) {
    let stringNoPunctuations = str.replace(/[^\w\s\']|_/g,"").replace(/\s+/g, "").toLowerCase();
    let strArray = stringNoPunctuations.split("")
    let reversedArray = strArray.reverse()
    let reversedString = reversedArray.join("")
    console.log(reversedString)
    console.log(stringNoPunctuations)
    if (reversedString == stringNoPunctuations) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
