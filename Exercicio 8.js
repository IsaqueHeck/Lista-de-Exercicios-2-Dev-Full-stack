//Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agruparPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const {cliente, total} = venda

       if(!acumulador[cliente]) {
        acumulador[cliente] = 0
       }

    acumulador[cliente]  += total
    return acumulador
    }, {} )
}

const vendas = [
    { cliente: 'Lamine Yamal', total: 150},
    { cliente: 'Ribamar', total: 200},
    { cliente: 'Jael', total: 100},
    { cliente: 'Lamine Yamal', total: 300},
    { cliente: 'Ribamar', total: 50}
]
const resultado = agruparPorCliente(vendas)
console.log(resultado)