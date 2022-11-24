function multiply(n, m) {
    let product = 0;
    for (let i = m; i > 0; i--) {
        product += n
    }
    return product
}

console.log(multiply(2, 2))

function division(n, m) {
    let quotient = 0;
    while (n >= m) {
        n -= m;
        quotient++
    }
    let remainder = n
    return `${quotient}, remainder: ${remainder}`
}

console.log(division(10, 4))