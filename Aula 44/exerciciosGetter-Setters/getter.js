// Exercício 1

class Funcionario {
    nome
    matricula
    salario

    constructor(matricula, nome, salario) {
        this.matricula = matricula
        this.nome = nome
        this.salario = salario
    }

    set matricula(matricula) {
        if (!this.validaMatricula(matricula)) {
            throw "Matricula inválida."
        }
        this.matricula = matricula
    }
    set nome(nome) {
        if (!this.validaNome(nome)) {
            throw "Nome inválido."
        }
        this.nome = nome
    }
    set salario(salario) {
        if (!this.validaSalario(salario)) {
            throw "Salário inválido."
        }
        this.salario = salario
    }

    validaMatricula(matricula) {
        return matricula > 0 && Number.isInteger(matricula)
    }
    validaNome(nome) {
        return nome.length > 4 && nome.length < 50
    }
    validaSalario(salario) {
        return salario > 465
    }
}