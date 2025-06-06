//Implemente function memoize(fn) que armazene em cache chamadas
//anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = {}

    return function(...args) {
        const key = JSON.stringify(args)

    if(cache[key]) {
        console.log("Do cache:" , key)
        return cache[key]
    }   
    
    const result = fn.apply(this, args)
    cache[key] = result
    return result
    }
}

function soma(a, b) {
    console.log("Calculando...")
    return a + b
}

const memoSoma = memoize(soma)

console.log(memoSoma(4, 5))
console.log(memoSoma(4, 5))
console.log(memoSoma(1, 2))
console.log(memoSoma(1, 2))