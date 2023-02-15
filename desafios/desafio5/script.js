let input = document.querySelector('#number')
let addButton = document.querySelector('#addButton')
let cleanButton = document.querySelector('#cleanButton')
let primaryOutput = document.querySelector('#primaryOutput')
let finalizeButton = document.querySelector('#finalizeButton')
let secondaryOutput = document.querySelector('#secondaryOutput')

let numbers = []


addButton.addEventListener('click', () => {
  let number = Number(input.value)

  
  let smallerThan100 = (a) => {
    if (a >= 1 && a <= 100) {
      return true
    } else {
      return false
    }
  }

  let checkList = (a, b) => {
    if (a.indexOf(b) == -1) {
      return true
    } else {
      return false
    }
  }

  if (smallerThan100(number) && checkList(numbers, number)) {
    primaryOutput.innerHTML += 'Adicionado: ' + number + '<br>'
    numbers.push(number)

    console.log(numbers)
  
  } else if (!checkList(numbers, number)) {
    alert('Valor adicionado anteriormente!')
  
  } else {
    alert('Preencha de acordo com as orientações!')
  }

  input.value = ''
  input.focus()
  secondaryOutput.innerHTML = ''
})




finalizeButton.addEventListener('click', () => {
  if (numbers.length == 0) {
    alert('Adicione alguns números!')
  
  } else {
    secondaryOutput.innerHTML = 'Total de números adicionados: ' + numbers.length



    let sum = 0
    for (let i of numbers) {
      sum += i
    }
    
    secondaryOutput.innerHTML += `<p>A soma dos números adicionados: ${sum}</p>`

    let average = sum / numbers.length
    secondaryOutput.innerHTML += `<p>A média dos números adicionados: ${average}</p>`



    let max = numbers[0]
    let min = numbers[0]
    
    for (let i of numbers) {
      if (i > max) {
        max = i
      }

      if (i < min) {
        min = i
      }
    }

    secondaryOutput.innerHTML += `<p>O maior número adicionado: ${max}</p>`
    secondaryOutput.innerHTML += `<p>O menor número adicionado: ${min}</p>`
  }
}) 




cleanButton.addEventListener('click', () => {
  numbers = []
  primaryOutput.innerHTML = ''
  secondaryOutput.innerHTML = ''
})