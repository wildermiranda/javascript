var button = document.querySelector('#button')
button.addEventListener('click', buttonClick)

function buttonClick() {
    var resultado = document.querySelector('#resultado')
    var anoField = Number(document.querySelector('#ano').value)
    var imagem = document.querySelector('#imagem')
    
    var data = new Date()
    var ano = data.getFullYear()

    var idade = ano - anoField


    if (anoField.length == 0 || anoField >= ano || idade > 90) {

        alert('Verifique os dados e tente novamente!')

    } else {
        var sexo = document.getElementsByName('sexo')
        var gênero = ''

        if (sexo[0].checked) {
            gênero = 'masculino'

            if (idade >= 0 && idade < 8) {
                // NENEM
                imagem.src = 'images/nenem-m.png'
            } else if (idade < 15) {
                // CRIANÇA
                imagem.src = 'images/menino.png'
            } else if (idade < 21) {
                // ADOLESCENTE
                imagem.src = 'images/adolescente-m.png'
            } else if (idade < 35) {
                // ADULTO JOVEM 
                imagem.src = 'images/adulto-jovem-m.png'
            } else if (idade < 50) {
                // ADULTO
                imagem.src = 'images/adulto-m.png'
            } else if (idade <= 90) {
                // IDOSO
                imagem.src = 'images/idoso-m.png'
            } 

        } else {
            gênero = 'feminino'

            if (idade >= 0 && idade < 8) {
                // NENEM
                imagem.src = 'images/nenem-f.png'
            } else if (idade < 15){
                // CRIANÇA
                imagem.src = 'images/menina.png'
            }else if (idade < 25) {
                // ADOLESCENTE
                imagem.src = 'images/adolescente-f.png'
            } else if (idade < 35) {
                // ADULTO JOVEM
                imagem.src = 'images/adulto-jovem-f.png'
            } else if (idade < 50) {
                // ADULTO
                imagem.src = 'images/adulto-f.png'
            } else if (idade < 100) {
                // IDOSO
                imagem.src = 'images/idoso-f.png'
            }
        }

        resultado.innerHTML = `<h5>Gênero ${gênero} e com ${idade} anos de idade</h5>`
        resultado.appendChild(imagem)
    }
}