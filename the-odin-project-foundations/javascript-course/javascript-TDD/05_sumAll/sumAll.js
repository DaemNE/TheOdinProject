const sumAll = function(min, max) {
    console.log(`min = ${min}, max = ${max}, typeof min = ${typeof min}, typeof max = ${typeof max}`)
    if (typeof max != "number" || typeof min != "number") {
        return "ERROR"
    }
    if (min > max) {
        holder = min
        min = max
        max = holder
    } 
    if (min < 0 || max < 0) {
        return "ERROR"
    }
    let sum = 0
    for (let i = max; i > min - 1; i--){
        sum += max;
        max--
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
