var body = document.querySelector('body')
body.addEventListener('onload', carregar())

function carregar(){
    var mensagem = document.querySelector('#mensagem')
    var imagem = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA

        imagem.src = 'images/morning.png'
        document.querySelector('body').style.background = '#F2CA99'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE

        imagem.src = 'images/afternoon.png'
        document.querySelector('body').style.background = '#D9C6BA'
    } else {
        // BOA NOITE

        imagem.src = 'images/night.png'
        document.querySelector('body').style.background = '#A9C6D9'
    }
}