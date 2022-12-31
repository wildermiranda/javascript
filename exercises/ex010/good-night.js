// Horário atual do seu sistema
const horaAtual = new Date()
const horas = horaAtual.getHours()

const minutos = new Date().getMinutes()

console.log (`Agora são exatamente ${horas}h${minutos}.`)

if (horas < 12) {
    console.log('Um ótimo dia! 😄')
} else if (horas <= 18) {
    console.log('Uma excelente tarde! 😄')
} else {
    console.log('Boa noite! 😄')
}