const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);
        const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        console.log(nomesComA);
    } catch (err) {
        console.log(err.message);
    }
})();