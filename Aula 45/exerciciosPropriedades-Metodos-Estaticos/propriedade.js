// Exercício 1

class Ponto2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    temEixoComum(a, b) {
        if (a == this.x || b == this.y) {
            return true
        }
        return false
    }
}