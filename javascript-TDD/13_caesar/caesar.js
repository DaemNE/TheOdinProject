const caesar = function(str, num) {

    
    num = num > 26 ? num % 26 : num;
    console.log(num)
    let encryptedWord = ""

    for (let i = 0; i < str.length ; i++) {
        if (!(str[i] === " ") && !(str[i] === "!") && !(str[i] === "?") && !(str[i] === ",")) {
            charCode = str.charCodeAt(i)
            if ((charCode + num) > 90 && (charCode + num) < 97) {
                charCode += 6
                charCode += num
                encryptedWord += String.fromCharCode(charCode).toUpperCase()
            } else if ((charCode + num) < 65) {
                 charCode += 26
                 charCode += num
                 encryptedWord += String.fromCharCode(charCode).toUpperCase()
            } else {
                charCode += num
                encryptedWord += String.fromCharCode(charCode)
            }
            
        } else {
            encryptedWord += str[i]
        }
    }
    return encryptedWord
};

// Do not edit below this line
module.exports = caesar;
