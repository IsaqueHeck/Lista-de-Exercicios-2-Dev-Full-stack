//Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair 
// todas as palavras únicas e exibi-las em um array.

let frase = "gato cachorro passarinho passarinho cavalo gato"
let palavras = frase.split(" ")

let palavrasUnicas = []

for(let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i]
    let contador = 0

for(let j = 0; j < palavras.length; j++) {
    if(palavras[j] === palavraAtual) {
        contador++
    }
}

if(contador === 1) {
    palavrasUnicas.push(palavraAtual)
   }
}
console.log(palavrasUnicas)