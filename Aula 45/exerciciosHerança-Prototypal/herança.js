// Exercício 1

    let animal = {
    pula: null
    }

    let coelho = {
        __proto__: animal,
        pula: true
    }

    console.log(coelho.pula) // true

    delete coelho.pula

    console.log(coelho.pula) // null

    delete animal.pula

    console.log(coelho.pula) // undefined


// Exercício 2

    let cabeca = {
    oculos: 1
    }

    let mesa = {
        caneta: 3
    }

    let cama = {
        lenco: 1,
        travesseiro: 2
    }

    let bolso = {
        dinheiro: 200
    }

    bolso.__proto__ = dinheiro
    console.log(bolso.dinheiro)

    cama.__proto__ = lenco
    console.log(cama.travesseiro)

    mesa.__proto__ = caneta
    console.log(mesa.caneta)

    cabeca.__proto__ = oculos
    console.log(cabeca.oculos)

    Testes:
    console.log(bolso.caneta) // 3
    console.log(cama.oculos) // 1
    console.log(mesa.dinheiro) // undefined


// Exercício 3

