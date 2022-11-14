var button = document.querySelector('button')

button.addEventListener('click', function() {
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let intervalo = document.querySelector('#intervalo')
    let resultado = document.querySelector('#resultado')

    //.trim() removendo whitespace de ambos os lados
    let inicioValue = inicio.value.trim()
    let fimValue = fim.value.trim()
    let intervaloValue = intervalo.value.trim()

    if (inicioValue === '' || fimValue === '' || intervaloValue === '') {alert('Error!')}
}); 



