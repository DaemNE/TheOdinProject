function capitalize(string) {
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1, string.length)
    return capitalizedString
}

module.exports = capitalize