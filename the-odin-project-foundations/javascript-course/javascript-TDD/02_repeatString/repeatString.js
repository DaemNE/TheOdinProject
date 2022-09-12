const repeatString = function(str, num) {
    var ourStr = ""
    if (str) {
        if (num > -1){
            for (let i = 0; i < num ; i++) {
                ourStr += str;
            }
        } else {
            return "ERROR"
        }
    }
    return ourStr;
};

// Do not edit below this line
module.exports = repeatString;
