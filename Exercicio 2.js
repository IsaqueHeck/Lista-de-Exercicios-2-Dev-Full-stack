/*Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar.
Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/

const prompt = require('prompt-sync')()

const numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let palpite = 0

while(palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100: "))
    tentativas++

    if(palpite < numeroAleatorio) {
        console.log("Mais alto!")
    } else if(palpite > numeroAleatorio) {
        console.log("Mais baixo!")
    } else {
        console.log("Parabéns! Você conseguiu acertar em " + tentativas + " tentativas")
    }
}