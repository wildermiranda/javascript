const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let inicio = Number(document.querySelector('#inicio').value)
    const fim = Number(document.querySelector('#fim').value)
    const intervalo = Number(document.querySelector('#intervalo').value)
    const output = document.querySelector('output')

    output.innerHTML = ''

    if (inicio == '' || fim == '' || intervalo == '') {
        alert('Por favor, preencha todos os campos.')
    
    } else if (inicio <= 0 || fim <= 0 || intervalo <= 0) {
        alert('Digite apenas números positivos')
    
    } else {
        for (inicio; inicio <= fim; inicio += intervalo) {
            let number = inicio
            output.innerHTML += `&nbsp&nbsp 👉 ${number}`
        }

        output.innerHTML += `&nbsp&nbsp&nbsp&nbsp 🏁`
    }
})