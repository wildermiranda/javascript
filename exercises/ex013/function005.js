function fatorial(number) {
    if (number == 1) {
        return number
    } else {
       return number * fatorial(number - 1) // Recursividade
    }
}


console.log(fatorial(6)) // 720