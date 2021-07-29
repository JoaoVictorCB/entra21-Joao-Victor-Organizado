const {area, circunferencia} = require("./circulo");
const Quadrado = require("./quadrado")

console.log(circulo.area(5));
console.log(circulo.circunferencia(5));

const quadrado = new Quadrado(2);
console.log(quadrado.area);