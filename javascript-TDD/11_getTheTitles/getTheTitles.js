const getTheTitles = function(arrayOfBooks) {
    let arrayOfTitles = []
    for (let i = 0; i < arrayOfBooks.length; i++) {
        arrayOfTitles.push(arrayOfBooks[i]["title"])
    }
    return arrayOfTitles
};

// Do not edit below this line
module.exports = getTheTitles;
