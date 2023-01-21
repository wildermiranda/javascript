const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let number = document.querySelector('#number').value
    const output = document.querySelector('output')

    output.innerHTML = ''
    
    if (number == '') {
        alert('Por favor, preencha o campo!')
    
    } else {
        for (let x = 0; x <= 10; x++) {
            output.innerHTML += `${number} x ${x} = ${number * x} <br>`
        } 
    }
})