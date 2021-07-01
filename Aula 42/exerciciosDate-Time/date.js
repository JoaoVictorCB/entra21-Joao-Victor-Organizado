/* Exercício 1: */


let dataParametros = new Date(2012, 2, 20, 13, 12, 0)
console.log(dataParametros)


/* Exercício 2: */


let data = new Date()

function obtemDiaSemana(data) {
    let diaSemana = data.getDay()
    switch (diaSemana) {
        case 0:
            return "Domingo"
        case 1:
            return "Segunda-Feira"
        case 2:
            return "Terça-Feira"
        case 3:
            return "Quarta-Feira"
        case 4:
            return "Quinta-Feira"
        case 5:
            return "Sexta-Feira"
        case 6:
            return "Sábado"
    }
}
console.log(obtemDiaSemana(data))


/* Exercício 3: */


function obtemUltimoDiaMes(ano, mes) {
    return (new Date(ano, mes, 0)).getDate()
}


/* Exercício 4: */


function obtemSegundos() {
    let hoje = new Date()
    return hoje.getSeconds() + hoje.getHours() * 60 * 60 + hoje.getMinutes() * 60
}

console.log(obtemSegundos())


/* Exercício 5: */


function segundosParaAmanha() {
    let hoje = new Date()
    let hojeEmSegundos = hoje.getSeconds() + hoje.getHours() * 60 * 60 + hoje.getMinutes() * 60
    let segundosDia = 24 * 60 * 60
    return (segundosDia - hojeEmSegundos)
}

console.log(segundosParaAmanha());


/* Exercício 6: */


function formataData(data) {
    let passada = ((new Date()) - data);
    if (passada < 1000)
        return "agora"
    if (passada < 60000)
        return (passada / 1000 + " segundos atrás")
    if (passada < 60000 * 60)
        return ((passada / 1000) / 60 + " minutos atrás")
    return (`${data.getDate()}.${data.getMonth()}.${data.getYear()} ${data.getHours()}:${data.getMinutes()}`)
}

console.log(formataData(new Date(new Date - 1)));
console.log(formataData(new Date(new Date - 30 * 1000)));
console.log(formataData(new Date(new Date - 5 * 60 * 1000)));