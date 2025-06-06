/*Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.*/


function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
}

function diasnoMes(mes, ano) {
    const diasporMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    //Se for fevereiro e ano bissexto retorna 29
    if(mes === 2 && ehBissexto(ano)) {
        return 29
    }
    return diasporMes[mes - 1] // -1 porque o array começa do índice 0
}

function ehDataValida (dia, mes, ano) {
    //Validar se os numeros são válidos
    if(ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false
    }
    //Saber quantos dias tem esse mês
    const diasMaximos = diasnoMes(mes, ano)

    //Verifica se o dia está dentro do limite
    return dia <= diasMaximos
}

console.log(ehDataValida(30, 10, 1987))
console.log(ehDataValida(33, 8, 2009))
console.log(ehDataValida(6, 3, 2022))
console.log(ehDataValida(29, 2, 2020))