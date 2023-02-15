function imparOuPar(number) {
    if (number % 2 == 0) { 
        return `${number} é par`
    
    } else {
        return `${number} é ímpar`
    }
}

console.log(imparOuPar(9))