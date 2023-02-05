// indexOf: Retorna o índice do valor declarado


// Jogadores do Manchester City 😄
let players = ['Kevin De Bruyne', 'Riyad Mahrez', 'Nathan Aké', 'Rico Lewis ']


let índice = players.indexOf('Nathan Aké')

if (índice == -1) {
    console.log(índice) // -1 (error)   
    console.log('Não há um índice que represente o valor')

} else {
    console.log(índice) // 2  
    console.log("Há um índice que represente o valor")
}