const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let inicio = document.querySelector('#inicio').value
    const fim = document.querySelector('#fim').value
    const intervalo = document.querySelector('#intervalo').value
    const output = document.querySelector('output')

    output.innerHTML = ''
    
    
    if (inicio.length == 0 || fim.length == 0 || intervalo.length == 0) {
        alert('Preencha os campos corretamente!')
    
    } else {
        let i = +inicio
        let f = +fim
        let int = +intervalo

        if (int == 0) {
            alert('O intervalo precisa ser maior que zero!')
            int++
        } 
        
    
        if (i < 0 || f < 0 || int < 0) {
            alert('Digite apenas números positivos!')
        
        } else {
            if (i < f) {
                for (i; i <= f; i += int) {
                    let number = i
                    output.innerHTML += `&nbsp&nbsp 👉 ${number}`
                }
            
            } else {
                for (i; i >= f; i -= int) {
                    let number = i
                    output.innerHTML += `&nbsp&nbsp 👉 ${number}`
                }
            }

            output.innerHTML += `&nbsp&nbsp&nbsp&nbsp 🏁`
        }
    } 
})