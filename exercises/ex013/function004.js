let fatorial = (number) => {
    let produto = 1 
    
    for (let i = number; i > 1; i--) {
        produto *= i
    }

    return produto
}

console.log(fatorial(5)) // 5 x 4 x 3 x 2 x 1 = 120
