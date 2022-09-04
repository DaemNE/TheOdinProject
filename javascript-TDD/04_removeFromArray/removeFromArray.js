const removeFromArray = function(array, ...args) {
    
        for (let arg of args){
            if (array.includes(arg)) {
                const index = array.indexOf(arg);
                array.splice(index, 1);
            };
        };
    
    console.log(array)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
