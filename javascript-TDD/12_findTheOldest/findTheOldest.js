const findTheOldest = function(arrayOfPeople) {
    currentYear = new Date('July 20, 2022 00:20:18').getFullYear()
    console.log(currentYear)
    for (let i = 0; i < arrayOfPeople.length; i++) {
        console.log(arrayOfPeople[i]["yearOfDeath"])
        if (!arrayOfPeople[i]["yearOfDeath"]){
            arrayOfPeople[i]["yearOfDeath"] = currentYear
        } 

        arrayOfPeople[i]["age"]  = arrayOfPeople[i]["yearOfDeath"] - arrayOfPeople[i]["yearOfBirth"];
        console.log(arrayOfPeople)
        
        
    }
    console.log(arrayOfPeople)
    arrayOfPeople.sort((a, b) => b.age - a.age)
    console.log(arrayOfPeople)
    let oldestPerson = arrayOfPeople[0]
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
