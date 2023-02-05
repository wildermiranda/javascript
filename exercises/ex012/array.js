let numbers = [3, 7, 11, 2, 5]

// console.log(number) // [3, 7, 11, 2, 5]
// console.log(number[3]) // 2


numbers[5] = 17 // índice [5] recebe o valor 17
// console.log(number) // [3, 7, 11, 2, 5, 17] 


numbers.push(13) // Adiciona o valor 13 na última posicão do vetor
// console.log(number) // [3, 7, 11, 2, 5, 17, 13]


// console.log(number.length) // 7

numbers.sort() // O método sort() ordena os elementos do array. A ordenação padrão é de acordo com a pontuação de código unicode.
console.log(numbers) // [11, 13, 17, 2, 3, 5, 7]