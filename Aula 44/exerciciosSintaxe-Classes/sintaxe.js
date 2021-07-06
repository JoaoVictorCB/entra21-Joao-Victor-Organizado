// Exercício 1

class Aluno {
    matricula
    nome
    notasProva
    notaTrabalho

    constructor(matricula, nome, notasProva, notaTrabalho) {
        this.matricula = matricula
        this.nome = nome
        this.notasProva = notasProva
        this.notaTrabalho = notaTrabalho
    }

    media() {
        let mediaFinal = 0
        for (let nota of this.notasProva) {
            mediaFinal += nota / 10 * 3
        }
        mediaFinal += this.notaTrabalho / 10 * 2
        return mediaFinal
    }
    final() {
        let mediaFinal = 0
        for (let nota of this.notasProva) {
            mediaFinal += nota / 10 * 3
        }
        mediaFinal += this.notaTrabalho / 10 * 2
        if (mediaFinal < 6) {
            return 0
        }
        return 10 - mediaFinal
    }
}

let aluno = new Aluno(2004, "Jaioon", [9, 10], 8)
console.log(aluno.media());
console.log(aluno.final());


// Exercício 2

class Agenda {
    lista = []

    armazenaPessoa(nome, telefone) {
        if (this.lista.length >= 10) {
            throw "A agenda está em seu limite(10)."
        }
        let pessoa = new Pessoa(nome, telefone)
        this.lista.push(pessoa)
    }
    removePessoa(nome) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].nome == nome) {
                this.lista.splice(i, 1)
                return "Deletado."
            }
        }
        return "Nenhuma pessoa com este nome."
    }
    buscaPessoa(nome) {
        for (let pessoa of this.lista) {
            if (pessoa.nome == nome) {
                return pessoa.telefone
            }
        }
        return "Nenhuma pessoa com este nome."
    }
    imprimeAgenda() {
        console.table(this.lista)
    }
    imprimePessoa(i) {
        console.log("Nome: " + this.lista[i].nome)
        console.log("Telefone: " + this.lista[i].telefone)
    }
}

class Pessoa {
    constructor(nome, telefone) {
        this.nome = nome
        this.telefone = telefone
    }
}

// Exercício 3

class Voo {
    lista = []

    constructor(numeroVoo, data) {
        this.numeroVoo = numeroVoo
        this.data = data
        for (let i = 0; i < 100; i++) {
            this.lista.push(false)
        }
    }
    proximoLivre() {
        return this.lista.findIndex((elm) => !elm)
    }
    verifica(i) {
        if (this.lista[i]) {
            return "Esta cadeira está ocupada."
        }
        return "Esta cadeira está liberada!"
    }
    ocupa(i) {
        if (this.lista[i]) {
            return false
        }
        return this.lista[i] = true
    }
    vagas() {
        let count = 0
        for (let vaga of this.lista) {
            if (!vaga) {
                count++
            }
        }
        return count
    }
    getVoo() {
        return this.numeroVoo
    }
}