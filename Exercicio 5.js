//Crie function debounce(fn, delay) que receba uma função fn e um delay
//em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timerId

    return function(...args) {
        if(timerId) {
            clearTimeout(timerId)
        }

     timerId = setTimeout(() => {
        fn.apply(this, args)
     }, delay)
    }
}

const grandeDia = () => {
    console.log("Executou!")
}

const debouncedFunc = debounce(grandeDia, 1000)
debouncedFunc()
debouncedFunc()
debouncedFunc()
debouncedFunc()