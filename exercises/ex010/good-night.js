// Horário atual do seu sistema
var horaAtual = new Date()
var horas = horaAtual.getHours()

console.log (`Agora são exatamente ${horas} horas.`)

if (horas < 12) {
    console.log('Bom dia!')
} else if (horas <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}