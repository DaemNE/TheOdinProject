const fibonacci = function(num) {
    let result = 0;
    let current = 1;
    let next;
    if (num < 1) {
        return "OOPS";
    } else {
        for (let i = 1; i <= String(num); i++) {
            next = current + result;
            result = current;
            current = next;
            
        } ;
        return result;
    };
    
};
// 1, 1, 2, 3, 5, 8, 13,
// Do not edit below this line
module.exports = fibonacci;
