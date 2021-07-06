// Exercício 1

class Produto {
    descricao
    preco
    nomeLoja

    constructor(nomeLoja, preco) {
        this.nomeLoja = nomeLoja
        this.preco = preco
        this.descricao = "Produto de informática"
    }

    get nomeLoja() {
        return this.nomeLoja
    }
    set nomeLoja(value) {
        this.nomeLoja = value
    }

    get preco() {
        return this.preco
    }
    set preco(preco) {
        this.preco = preco
    }

    get descricao() {
        return this.descricao
    }
    set descricao(descricao) {
        this.descricao = descricao
    }
}

class Mouse extends Produto {
    constructor(nomeLoja, preco, tipo, descricao) {
        super(nomeLoja, preco)
        this.tipo = tipo
        super.descricao = descricao
    }
    get descricao() {
        return this.tipo + " " + super.descricao
    }
}
class Livro extends Produto {
    constructor(nomeLoja, preco, autor, descricao) {
        super(nomeLoja, preco)
        this.autor = autor
        super.descricao = descricao
    }
    get descricao() {
        return this.autor + " " + super.descricao
    }
}