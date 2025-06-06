//Dado um array produtos = [{ nome, preco }, ...], crie uma função que
//retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function obterNomesOrdenadosPorPreco (produtos) {
    return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome)
}

const produtos = [
    { nome: 'Fone de ouvido', preco: 100},
    { nome: 'Notebook', preco: 3000},
    { nome: 'Carregador', preco: 50},
    { nome: 'Monitor', preco: 800},
    { nome: 'Mouse', preco: 60}
]

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos)
console.log(nomesOrdenados)