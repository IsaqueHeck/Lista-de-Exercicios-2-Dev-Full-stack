//Escreva duas funções:
//paresParaObjeto(pares) recebe um array de pares [ [chave,valor], ... ] e retorna o objeto equivalente.
//objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares) {
    return Object.fromEntries(pares)
}
//Pares para objeto
const paresEntrada = [['marca', 'Apple'], ['preco', 3000]]
const objConvertidos = paresParaObjeto(paresEntrada)

console.log('Objeto convertido:', objConvertidos)

function objetosParaPares(obj) {
    return Object.entries(obj)
}
//Objeto para pares
const objEntrada = { produto: 'Macbook', preco: 5000}
const paresConvertidos = objetosParaPares(objEntrada)

console.log('Pares convertidos:', paresConvertidos)